
type SubTitleProps = {
    title: string
}

const SubTitle = ({ title }:SubTitleProps) => {
    return (
        <h3 className = "font-bold text-xl p-2 text-center">{title}</h3>
    )
};

export default SubTitle
