interface IUser {
    id: string,
    firstName?: string,
    lastName?: string,
    email: string,
    password: string,
    profile: {
        bio?: string,
        skills?: [
            string
        ]
    }
}

interface ICompany {
    id: string,
    name: string,
    address: string,
    employees: IUser[],
}

interface ICertificate {
    id: string,
    name: string,
    issuer: string,
    issuedDate: string,
    type: string,
    owner: IUser,
}

export type { IUser, ICompany, ICertificate };