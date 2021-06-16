export default function ({ types: t }) {
	return {
		visitor: {
			JSXOpeningElement(path) {
				const { attributes } = path.node;
				if (attributes.some(attr => attr.name.name === "__static")) return;

				const staticNames = attributes.filter(({ value }) => {
					if (t.isJSXExpressionContainer(value)) value = value.expression;
					return t.isImmutable(value);
				}).map(({ name }) => t.stringLiteral(name.name));

				if (staticNames.length === 0) return;

				const id = this.file.scope.generateDeclaredUidIdentifier("static");

				path.pushContainer("attributes", t.jsxAttribute(
					t.jsxIdentifier("__static"),
					t.jsxExpressionContainer(
						t.assignmentExpression("||=", id,
							t.newExpression(t.identifier("Set"), [t.arrayExpression(staticNames)])
						)
					)
				));
			}
		}
	}
}