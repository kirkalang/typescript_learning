module.exports = {
    preset: 'ts-jest',
    testEnvironment: "node",

    transform: {
        '^.+\\.tsx?$': [
            'ts-jest', {
                tsconfig: '<rootDir>/tsconfig.json',
            }
        ]
    },
    transformIgnorePatterns: [
        "node_modules/(?!troublesome-dependency/.*)",
    ]
}