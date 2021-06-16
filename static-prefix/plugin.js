export default function ({ types: t }) {
	return {
		visitor: {
			JSXAttribute(path) {
				let { name, value } = path.node;

				if (t.isJSXNamespacedName(name)) return;

				if (t.isJSXExpressionContainer(value)) value = value.expression;

				if (t.isImmutable(value)) {
					path.set("name", t.jsxNamespacedName(t.jsxIdentifier("static"), name));
				}
			}
		}
	}
}