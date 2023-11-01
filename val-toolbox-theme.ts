import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const valToolboxTheme: CustomThemeConfig = {
	name: 'val-toolbox-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #5da4da
		'--color-primary-50': '231 241 249', // #e7f1f9
		'--color-primary-100': '223 237 248', // #dfedf8
		'--color-primary-200': '215 232 246', // #d7e8f6
		'--color-primary-300': '190 219 240', // #bedbf0
		'--color-primary-400': '142 191 229', // #8ebfe5
		'--color-primary-500': '93 164 218', // #5da4da
		'--color-primary-600': '84 148 196', // #5494c4
		'--color-primary-700': '70 123 164', // #467ba4
		'--color-primary-800': '56 98 131', // #386283
		'--color-primary-900': '46 80 107', // #2e506b
		// secondary | #86e4cc
		'--color-secondary-50': '237 251 247', // #edfbf7
		'--color-secondary-100': '231 250 245', // #e7faf5
		'--color-secondary-200': '225 248 242', // #e1f8f2
		'--color-secondary-300': '207 244 235', // #cff4eb
		'--color-secondary-400': '170 236 219', // #aaecdb
		'--color-secondary-500': '134 228 204', // #86e4cc
		'--color-secondary-600': '121 205 184', // #79cdb8
		'--color-secondary-700': '101 171 153', // #65ab99
		'--color-secondary-800': '80 137 122', // #50897a
		'--color-secondary-900': '66 112 100', // #427064
		// tertiary | #d8d45a
		'--color-tertiary-50': '249 249 230', // #f9f9e6
		'--color-tertiary-100': '247 246 222', // #f7f6de
		'--color-tertiary-200': '245 244 214', // #f5f4d6
		'--color-tertiary-300': '239 238 189', // #efeebd
		'--color-tertiary-400': '228 225 140', // #e4e18c
		'--color-tertiary-500': '216 212 90', // #d8d45a
		'--color-tertiary-600': '194 191 81', // #c2bf51
		'--color-tertiary-700': '162 159 68', // #a29f44
		'--color-tertiary-800': '130 127 54', // #827f36
		'--color-tertiary-900': '106 104 44', // #6a682c
		// success | #39ea44
		'--color-success-50': '225 252 227', // #e1fce3
		'--color-success-100': '215 251 218', // #d7fbda
		'--color-success-200': '206 250 208', // #cefad0
		'--color-success-300': '176 247 180', // #b0f7b4
		'--color-success-400': '116 240 124', // #74f07c
		'--color-success-500': '57 234 68', // #39ea44
		'--color-success-600': '51 211 61', // #33d33d
		'--color-success-700': '43 176 51', // #2bb033
		'--color-success-800': '34 140 41', // #228c29
		'--color-success-900': '28 115 33', // #1c7321
		// warning | #d5eb2d
		'--color-warning-50': '249 252 224', // #f9fce0
		'--color-warning-100': '247 251 213', // #f7fbd5
		'--color-warning-200': '245 250 203', // #f5facb
		'--color-warning-300': '238 247 171', // #eef7ab
		'--color-warning-400': '226 241 108', // #e2f16c
		'--color-warning-500': '213 235 45', // #d5eb2d
		'--color-warning-600': '192 212 41', // #c0d429
		'--color-warning-700': '160 176 34', // #a0b022
		'--color-warning-800': '128 141 27', // #808d1b
		'--color-warning-900': '104 115 22', // #687316
		// error | #e55424
		'--color-error-50': '251 229 222', // #fbe5de
		'--color-error-100': '250 221 211', // #faddd3
		'--color-error-200': '249 212 200', // #f9d4c8
		'--color-error-300': '245 187 167', // #f5bba7
		'--color-error-400': '237 135 102', // #ed8766
		'--color-error-500': '229 84 36', // #e55424
		'--color-error-600': '206 76 32', // #ce4c20
		'--color-error-700': '172 63 27', // #ac3f1b
		'--color-error-800': '137 50 22', // #893216
		'--color-error-900': '112 41 18', // #702912
		// surface | #1f2223
		'--color-surface-50': '221 222 222', // #dddede
		'--color-surface-100': '210 211 211', // #d2d3d3
		'--color-surface-200': '199 200 200', // #c7c8c8
		'--color-surface-300': '165 167 167', // #a5a7a7
		'--color-surface-400': '98 100 101', // #626465
		'--color-surface-500': '31 34 35', // #1f2223
		'--color-surface-600': '28 31 32', // #1c1f20
		'--color-surface-700': '23 26 26', // #171a1a
		'--color-surface-800': '19 20 21', // #131415
		'--color-surface-900': '15 17 17' // #0f1111
	}
};
