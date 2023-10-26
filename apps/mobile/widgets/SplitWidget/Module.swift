//
//  Module.swift
//  SplitWidget
//
//  Created by Giuseppe Davanzo on 26/10/23.
//

import ExpoModulesCore
import ActivityKit
import Foundation

internal class MissingCurrentWindowSceneException: Exception {
    override var reason: String {
        "Cannot determine the current window scene in which to present the modal for requesting a review."
    }
}


public class ReactNativeWidgetExtensionModule: Module {
    public func definition() -> ModuleDefinition {
        Name("ReactNativeWidgetExtension")

        Function("areActivitiesEnabled") { () -> Bool in
            let logger = Logger()
            logger.info("areActivitiesEnabled()")

            if #available(iOS 16.1, *) {
                return ActivityAuthorizationInfo().areActivitiesEnabled
            } else {
                return false
            }
        }

        Function("startActivity") { (title: String, icon: String, progress: Float, subtitle: String) -> Void in
            let logger = Logger()
            logger.info("startActivity()")

            if #available(iOS 16.1, *) {
                let attributes = SplitWidgetAttributes()
                let contentState = SplitWidgetAttributes.ContentState(title: title, icon: icon, progress: progress, subtitle: subtitle)
                let activityContent = ActivityContent(state: contentState, staleDate: Calendar.current.date(byAdding: .minute, value: 30, to: Date())!)

                do {
                    let activity = try Activity.request(attributes: attributes, content: activityContent)
                    logger.info("Requested a Live Activity \(String(describing: activity.id)).")
                } catch (let error) {
                    logger.info("Error requesting Live Activity \(error.localizedDescription).")
                }
            }
        }

        Function("listAllActivities") { (resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void in
            if #available(iOS 16.1, *) {
                var activities = Activity<SplitWidgetAttributes>.activities

                activities.sort { $0.id > $1.id }

                return resolve(activities.map{["id": $0.id, "data": $0.contentState.data ]})
            }
        }

        Function("updateActivity") { (id: String, title: String, icon: String, progress: Float, subtitle: String) -> Void in
            let logger = Logger()
            logger.info("updateActivity()")

            if #available(iOS 16.1, *) {
                Task {
                    let updatedState = SplitWidgetAttributes.ContentState(title: title, icon: icon, progress: progress, subtitle: subtitle)
                    let activities = Activity<SplitWidgetAttributes>.activities
                    let activity = activities.filter {$0.id == id}.first

                    await activity?.update(using: updatedState)
                    logger.info("Updated the Live Activity: \(id)")
                }
            }
        }

        Function("endActivity") { (id: String) -> Void in
            let logger = Logger()
            logger.info("endActivity()")

            if #available(iOS 16.1, *) {
                Task {
                    await Activity<SplitWidgetAttributes>.activities.filter {$0.id == id}.first?.end(dismissalPolicy: .immediate)
                    logger.info("Ended the Live Activity: \(id)")
                }
            }
        }

    }
}
