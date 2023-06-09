interface FormProps {
    title?: String,
    children?: React.ReactNode,
    size?: String
}

interface HeaderProps {
    title: String,
    children?: React.ReactNode,
}

interface CriancaProps {
    nome: String,
    img: String,
    navigation: any
}

interface JogoProps {
    nome: String,
    bloqueado: Boolean,
    img: String
}

interface NutrinhoProps {
    nome: String,
    desc: String,
    image: String
}