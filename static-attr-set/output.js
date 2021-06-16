var _static, _static2;

function Component({
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: "my-div",
    className: className,
    __static: _static ||= new Set(["id"])
  }, /*#__PURE__*/React.createElement("p", {
    color: color,
    label: "foo",
    "data-attr": "2",
    __static: _static2 ||= new Set(["label", "data-attr"])
  }));
}
