export interface actionsType {
    type: string;
    newText: string,
    newMessage: string,
}

export interface profilePage {
    posts: Array<{id: number, message: string, likesCount: number,}>;
}