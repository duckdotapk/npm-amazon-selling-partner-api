//
// Imports
//

import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

//
// ESLint config
//

export default defineConfig(
[
	{
		files:
		[
			"src/**/*.ts",
		],
		plugins:
		{
			js,
		},
		extends:
		[
			"js/recommended",
		],
		languageOptions:
		{
			globals:
			{
				...globals.browser,
				...globals.node
			},
		},
	},
	tseslint.configs.recommended,
	{
		rules:
		{
			"@typescript-eslint/no-unused-expressions":
			[
				"error",
				{
					allowTernary: true,
				},
			],
			"@typescript-eslint/no-unused-vars":
			[
				"error",
				{
					args: "none",
					varsIgnorePattern: "_*",
				},
			],
		},
	},
	{
		rules:
		{
			"curly": [ "error", "all" ],
		},
	},
	{
		plugins:
		{
			"@stylistic": stylistic,
		},
		rules:
		{
			// https://eslint.style/rules

			"@stylistic/array-bracket-newline": [ "error", "consistent" ],
			"@stylistic/array-bracket-spacing": [ "error", "always" ],
			"@stylistic/array-element-newline":
			[
				"error",
				// Loren: minItems 4 seemed like a reasonable requirement after trying 2 and 3
				//	There are many cases where I want to say, destructure an array of 2-3 items
				//	and needing to spread it on multiple lines is kinda dumb
				{
					consistent: true,
					multiline: true,
					minItems: 4,
				},
			],
			"@stylistic/arrow-parens": [ "error", "always" ],
			"@stylistic/arrow-spacing":
			[
				"error",
				{
					before: true,
					after: true,
				},
			],
			"@stylistic/block-spacing": "error",
			"@stylistic/brace-style": [ "error", "allman" ],
			"@stylistic/comma-dangle": [ "error", "only-multiline" ],
			"@stylistic/comma-spacing": "error",
			"@stylistic/comma-style": "error",
			"@stylistic/computed-property-spacing": "error",
			"@stylistic/curly-newline": "error",
			"@stylistic/dot-location": [ "error", "property" ],
			"@stylistic/eol-last": "error",
			"@stylistic/function-call-argument-newline": "off",
			"@stylistic/function-call-spacing": "error",
			"@stylistic/function-paren-newline": "off",
			"@stylistic/generator-star-spacing": "off",
			"@stylistic/implicit-arrow-linebreak": "off",

			// Loren: I want to enforce tabs but this rule does not actually do that properly
			"@stylistic/indent": "off",

			"@stylistic/indent-binary-ops": "off",
			"@stylistic/key-spacing": "error",
			"@stylistic/keyword-spacing": "error",
			"@stylistic/line-comment-position": "off",
			"@stylistic/linebreak-style": "off",
			"@stylistic/lines-around-comment": "off",
			"@stylistic/lines-between-class-members": "off",

			// TODO: enforce this when it's not a massive PITA to do
			"@stylistic/max-len": "off",
			// [
			// 	"error",
			// 	{
			// 		code: 100,
			// 		tabWidth: 4,
			// 		ignorePattern: "import .*",
			// 		ignoreTemplateLiterals: true,
			// 	},
			// ],

			"@stylistic/max-statements-per-line": "error",
			"@stylistic/member-delimiter-style": "error",
			"@stylistic/multiline-comment-style": [ "error", "separate-lines" ],
			"@stylistic/multiline-ternary": [ "error", "always-multiline" ],
			"@stylistic/new-parens": "error",

			// TODO: possibly a good idea to enforce but I can't be bothered right now
			"@stylistic/newline-per-chained-call": "off",

			"@stylistic/no-confusing-arrow": "off",
			"@stylistic/no-extra-parens": "off",
			"@stylistic/no-extra-semi": "error",
			"@stylistic/no-floating-decimal": "error",
			"@stylistic/no-mixed-operators": "error",
			"@stylistic/no-mixed-spaces-and-tabs": [ "error", "smart-tabs" ],
			"@stylistic/no-multi-spaces": "error",
			"@stylistic/no-multiple-empty-lines":
			[
				"error",
				{
					max: 1,
				},
			],
			"@stylistic/no-tabs": "off",
			"@stylistic/no-trailing-spaces":
			[
				"error",
				{
					skipBlankLines: true,
				},
			],
			"@stylistic/no-whitespace-before-property": "error",
			"@stylistic/nonblock-statement-body-position": "off",
			"@stylistic/object-curly-newline":
			[
				"error",
				{
					consistent: true,
				},
			],
			"@stylistic/object-curly-spacing": [ "error", "always" ],
			"@stylistic/object-property-newline":
			[
				"error",
				{
					allowAllPropertiesOnSameLine: true,
				},
			],
			"@stylistic/one-var-declaration-per-line": "error",
			"@stylistic/operator-linebreak": "error",
			"@stylistic/padded-blocks": [ "error", "never" ],
			"@stylistic/padding-line-between-statements": "off",
			"@stylistic/quote-props": "off",
			"@stylistic/quotes":
			[
				"error",
				"double",
				{
					allowTemplateLiterals: "always",
				},
			],
			"@stylistic/rest-spread-spacing": "error",
			"@stylistic/semi": [ "error", "always" ],
			"@stylistic/semi-spacing": "error",
			"@stylistic/semi-style": "off",
			"@stylistic/space-before-blocks": "error",
			"@stylistic/space-before-function-paren":
			[
				"error",
				{
					anonymous: "always",
					asyncArrow: "always",
					catch: "always",
					named: "ignore",
				},
			],
			"@stylistic/space-in-parens": "error",
			"@stylistic/space-infix-ops": "error",
			"@stylistic/space-unary-ops": "error",
			"@stylistic/spaced-comment": "error",
			"@stylistic/switch-colon-spacing": "error",
			"@stylistic/template-curly-spacing": [ "error", "always" ],
			"@stylistic/template-tag-spacing": "error",
			"@stylistic/type-annotation-spacing":
			[
				"error",
				{
					before: false,
					after: true,
					overrides:
					{
						// TODO: @stylistic/eslint-plugin complains about this being deprecated
						//	but emits style errors if it's not here even though arrow-spacing
						//	is also defined, idk?
						arrow:
						{
							before: true,
							after: true,
						},
					},
				},
			],
			"@stylistic/type-generic-spacing": "off",
			"@stylistic/type-named-tuple-spacing": "error",
			"@stylistic/wrap-iife": "error",
			"@stylistic/wrap-regex": "off",
			"@stylistic/yield-star-spacing": "off",
		},
	},
]);
