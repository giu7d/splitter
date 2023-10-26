//
//  SplitWidgetBundle.swift
//  SplitWidget
//
//  Created by Giuseppe Davanzo on 26/10/23.
//

import WidgetKit
import SwiftUI

@main
struct SplitWidgetBundle: WidgetBundle {
    var body: some Widget {
        SplitWidget()
        SplitWidgetLiveActivity()
    }
}
