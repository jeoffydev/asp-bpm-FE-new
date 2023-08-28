import { rest } from 'msw'

const handlers = [
  rest.get('/api/OwnerApi', (req, res, ctx) => {
    const mockApiResponse = [
        {
            id: 1,
            fullName: "owner",
            email: "owner@owner.com",
            active: true,
            authRoleId: 1,
            roleName: "Owner"
        },
        {
            id: 2,
            fullName: "Jeoffy Hipolito",
            email: "owner@yahoo.com",
            active: true,
            authRoleId: 1,
            roleName: "Owner"
        }
    ]
    return res(ctx.json(mockApiResponse))
  }),
]

export { handlers }