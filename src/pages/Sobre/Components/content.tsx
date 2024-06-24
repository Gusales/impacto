interface ContentProps{
    imgSrc: string
    imgAlt: string
    imgPosition?: "left" | "right"
    title: string
    content: string
}

export function Content({ content, imgAlt, imgPosition = "right", imgSrc, title }: ContentProps){
    return(
        <article className={`flex w-fit items-center mb-12 ${imgPosition === "left" && "flex-row-reverse"}`}>
            <div className="w-3/4 flex flex-col gap-4">
                <h2 className="border-b-4 border-[#004AAD] w-fit text-2xl">{title}</h2>
                <p className={`${imgPosition === "right" && "w-2/3"}`}>{content}</p>
            </div>

            <figure className="h-60 w-80 grid place-items-center">
                <img src={imgSrc} alt={imgAlt}  className="object-cover rounded-2xl" />
            </figure>
        </article>
    )
}