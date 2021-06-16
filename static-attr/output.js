function Component({
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: "my-div",
    className: className,
    __static: ["id"]
  }, /*#__PURE__*/React.createElement("p", {
    color: color,
    label: "foo",
    "data-attr": "2",
    __static: ["label", "data-attr"]
  }));
}
