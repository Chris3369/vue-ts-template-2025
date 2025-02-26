const ROLES = {
    admin: [
        "view:comments",
        "create:comments",
        "update:comments",
        "delete:comments",
    ],
    moderator: ["view:comments", "create:comments", "delete:comments"],
    user: ["view:comments", "create:comments", "update:ownComments", "delete:ownComments"],
} as const

type Role = keyof typeof ROLES
type Permission = typeof ROLES[Role][number]

export type User = {
    roles: Role[]
    id: string
}

export const hasPermission = (user: User, permission: Permission) => {
    return user.roles.some(role =>
        (ROLES[role] as readonly Permission[]).includes(permission)
    )
}

// // USAGE:
// const user: User = { id: "1", roles: ["user"] }

// // Can create a comment
// hasPermission(user, "create:comments")

// // Can view all comments
// hasPermission(user, "view:comments")