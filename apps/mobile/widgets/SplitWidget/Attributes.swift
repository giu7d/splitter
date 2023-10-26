//
//  Attributes.swift
//  SplitWidget
//
//  Created by Giuseppe Davanzo on 26/10/23.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct SplitWidgetAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var title: String
        var icon: String
        var progress: Float
        var subtitle: String
    }
}
