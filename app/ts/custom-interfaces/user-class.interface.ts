export class UserClassInterface {
    id ? : number | string;
    name: string;
    job: string;
    updatedAt ? : string;

}

export interface UserEditFormObject_I {

    id: string | number;
    first_name: string;
    last_name: string;
    avatar: string;
}
