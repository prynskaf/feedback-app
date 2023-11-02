 export interface HeaderProps {
    text: string;
}

 export interface FeedbackListProps {
    id: number,
    text: string,
    rating: number
}


export interface handleTextChangeProps {
    text: string,
    handleTextChange: (text: string) => void


}

export interface ButtonProps  {
    version: string,
    type?: "button" | "submit" | "reset";
    isDisabled: boolean,
    children: React.ReactNode

}

export interface addFeedbackProps {
    rating: number
    test: string,
}

