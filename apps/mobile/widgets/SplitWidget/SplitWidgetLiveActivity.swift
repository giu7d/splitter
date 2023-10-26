//
//  SplitWidgetLiveActivity.swift
//  SplitWidget
//
//  Created by Giuseppe Davanzo on 26/10/23.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct SplitWidgetLiveActivity: Widget {

    @State var opacity: CGFloat = 1

    var body: some WidgetConfiguration {
        ActivityConfiguration(for: SplitWidgetAttributes.self) { context in
            VStack(alignment: .leading) {
                HStack(alignment: .center) {
                    Text(context.state.icon)
                        .background(
                            Circle()
                                .fill(.orange)
                                .opacity(0.1)
                                .frame(width: 42, height: 42)
                        )

                    VStack(alignment: .leading) {
                        Text(context.state.title)
                            .font(.headline)
                        Text(context.state.subtitle)
                            .font(.subheadline)
                            .opacity(0.75)
                    }
                    .padding(.leading, 14)
                    Spacer()
                    Circle()
                        .fill(.yellow)
                        .opacity(opacity)
                        .frame(width: 8, height: 8)
                        .onAppear {
                            withAnimation(.easeIn(duration: 1).repeatForever(autoreverses: true)) {
                                opacity = 0.5
                            }
                        }
                }
                ZStack{
                    ProgressView(value: context.state.progress, total: 1)
                        .tint(.green)
                        .background(Color.gray.opacity(0.1))

                    HStack{
                        Image(systemName: "hourglass")
                            .font(.system(size: 14, weight: .light))
                            .foregroundColor(.white)
                            .background(
                                Circle()
                                    .fill(.green)
                                    .shadow(radius: 0.5)
                                    .frame(width: 32, height: 32)
                            )
                        Spacer()
                        Image(systemName: "cube.box.fill")
                            .font(.system(size: 14, weight: .light))
                            .foregroundColor(context.state.progress >= 0.5 ? .white : .gray)
                            .background(
                                Circle()
                                    .fill(context.state.progress >= 0.5 ? .green : .white)
                                    .shadow(radius: 0.5)
                                    .frame(width: 32, height: 32)
                            )
                        Spacer()
                        Image(systemName: "flame.fill")
                            .font(.system(size: 14, weight: .light))
                            .foregroundColor(context.state.progress >= 1 ? .white : .gray)
                            .background(
                                Circle()
                                    .fill(context.state.progress >= 1 ? .green : .white)
                                    .shadow(radius: 0.5)
                                    .frame(width: 32, height: 32)
                            )
                    }
                }
                .padding(.top, 18)
            }
            .padding(EdgeInsets(top: 24, leading: 32, bottom: 32, trailing: 32))
            .activityBackgroundTint(Color.white)
            .activitySystemActionForegroundColor(Color.black)

        } dynamicIsland: { context in
            DynamicIsland {
                // Expanded UI goes here.  Compose the expanded UI through
                // various regions, like leading/trailing/center/bottom
                DynamicIslandExpandedRegion(.leading) {}
                DynamicIslandExpandedRegion(.trailing) {}
                DynamicIslandExpandedRegion(.bottom) {
                    VStack {
                        HStack(alignment: .center) {
                            Text(context.state.icon)
                                .background(
                                    Circle()
                                        .fill(.orange)
                                        .opacity(0.1)
                                        .frame(width: 32, height: 32)
                                )

                            Text(context.state.title)
                                .font(.system(size: 12, weight: .light, design: .default))
                            Spacer()
                            Circle()
                                .fill(.yellow)
                                .opacity(opacity)
                                .frame(width: 8, height: 8)
                                .onAppear {
                                    withAnimation(.easeIn(duration: 1).repeatForever(autoreverses: true)) {
                                        opacity = 0.5
                                    }
                                }
                        }
                        ZStack{
                            ProgressView(value: context.state.progress, total: 1)
                                .tint(.green)
                                .background(Color.gray.opacity(0.1))

                            HStack{
                                Image(systemName: "hourglass")
                                    .font(.system(size: 14, weight: .light))
                                    .foregroundColor(.white)
                                    .background(
                                        Circle()
                                            .fill(.green)
                                            .shadow(radius: 0.5)
                                            .frame(width: 32, height: 32)
                                    )
                                Spacer()
                                Image(systemName: "cube.box.fill")
                                    .font(.system(size: 14, weight: .light))
                                    .foregroundColor(context.state.progress >= 0.5 ? .white : .gray)
                                    .background(
                                        Circle()
                                            .fill(context.state.progress >= 0.5 ? .green : .white)
                                            .shadow(radius: 0.5)
                                            .frame(width: 32, height: 32)
                                    )
                                Spacer()
                                Image(systemName: "flame.fill")
                                    .font(.system(size: 14, weight: .light))
                                    .foregroundColor(context.state.progress >= 1 ? .white : .gray)
                                    .background(
                                        Circle()
                                            .fill(context.state.progress >= 1 ? .green : .white)
                                            .shadow(radius: 0.5)
                                            .frame(width: 32, height: 32)
                                    )
                            }
                        }
                        .padding(.top, 14)
                    }
                    .padding(EdgeInsets(top: 24, leading: 24, bottom: 8, trailing: 24))
                }
            } compactLeading: {
                Text(context.state.icon)
            } compactTrailing: {
                Circle()
                    .fill(.yellow)
                    .opacity(opacity)
                    .frame(width: 8, height: 8)
                    .onAppear {
                        withAnimation(.easeIn(duration: 1).repeatForever(autoreverses: true)) {
                            opacity = 0.5
                        }
                    }
            } minimal: {
                HStack {
                    Text(context.state.icon)
                    Circle()
                        .fill(.yellow)
                        .opacity(opacity)
                        .frame(width: 8, height: 8)
                        .onAppear {
                            withAnimation(.easeIn(duration: 1).repeatForever(autoreverses: true)) {
                                opacity = 0.5
                            }
                        }
                }
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}

struct SplitWidgetLiveActivity_Previews: PreviewProvider {
    static let attributes = SplitWidgetAttributes()
    static let contentState = SplitWidgetAttributes.ContentState(title: "Churras", icon: "🍖", progress: 0.5, subtitle: "Aguardando participantes...")

    static var previews: some View {
        attributes
            .previewContext(contentState, viewKind: .dynamicIsland(.compact))
            .previewDisplayName("Island Compact")
        attributes
            .previewContext(contentState, viewKind: .dynamicIsland(.expanded))
            .previewDisplayName("Island Expanded")
        attributes
            .previewContext(contentState, viewKind: .dynamicIsland(.minimal))
            .previewDisplayName("Minimal")
        attributes
            .previewContext(contentState, viewKind: .content)
            .previewDisplayName("Notification")
    }
}
