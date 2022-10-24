# UX Design Document

## 1. Constraints:

### 1.1 Features

#### 1.1.1 Constraint: The synth contains "core features" that should be easy and rewarding to interact with.

Each feature will be contained in one "screen" or page. If the user is on oscillator 1, the app's screen will entirely encompass the screen. When a user switches to the "Macro" page, the entire screen will switch to the macros, etc. The flow of the pages is discussed elsewhere in this doc.

### 1.2 Navigation

#### 1.2.1 Constraint: The app should promote a somewhat-normal workflow, by having intuitive navigation.

For instance, add and tune the oscillators, before modulating with envelopes or adding effects.

Starting pane:
  OSC. 1

### 1.2.2 Constraint: It should be easy to see "the big picture" at any time

Big-picture here entails the signal coming into the master bus.
Mid-level picture is all the effects influencing a specific oscillator.
Micro-level picture is a single oscillator or effect modulating a single oscillator.

TODO: There should be a way to reach the master bus view simply, that can't be activated accidentally (Users will be swiping around mutating parameters, so probably no swipe gestures).
TODO: There should be a "return to where I came from" MAYBE, if you pop out to the master view.


### 1.3 Interaction

#### 1.3.1 Constraint: The app should intelligently leverage touch controls.

The user should never say: "I meant to long press, but accidentally double-tapped.
The user should always be aware of what happened.
  - (No snapping; transitions)
  - Last-edited parameter highlighted in some way.
    - One color for "this was just done"
  - One color for "this was just UN-done"

The app SHOULD NOT (or at least be mindful) of redefining already-engrained common actions. Swipe from top is usually "refresh" and 3-finger tap is usually "undo"

