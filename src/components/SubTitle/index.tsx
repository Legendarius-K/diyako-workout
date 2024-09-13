
type SubTitleProps = {
    heroMsg: string
}

const SubTitle = ({ heroMsg }:SubTitleProps) => {
    return (
        <h3 className = "font-bold text-xl p-2 text-center">{heroMsg}</h3>
    )
};

export default SubTitle
