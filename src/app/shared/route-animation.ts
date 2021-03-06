import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("Content => *", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(-100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("Auth => *", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("Chat => *", [
    query(":enter, :leave", style({ overflow: "hidden", position: "fixed" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(-100%)", overflow: "hidden" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("Projects => *", [
    query(":enter, :leave", style({ overflow: "hidden", position: "fixed" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(-100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ])
]);
