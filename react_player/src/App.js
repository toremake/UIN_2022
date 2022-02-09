import './styles/css/main.css'
import Navbar from './components/Navbar'

const initialHistory = [{
        id: 1,
        title: 'Leaders eat last',
        author: 'Simon Sinek',
        duration: '12.25',
        order: 1,
        genre: 'Business',
    },
    {
        id: 2,
        title: 'Purple Cow',
        author: 'Seth Godin',
        duration: '10.25',
        order: 2,
        genre: 'Marketing',
    },
    {
        id: 3,
        title: 'The design of everyday things',
        author: 'Don Norman',
        duration: '09.25',
        order: 3,
        genre: 'Design',
    },
]

const initialPodcasts = [{
        id: 1,
        title: 'Leaders eat last',
        author: 'Simon Sinek',
        duration: '12.25',
        order: 1,
        genre: 'Business',
    },
    {
        id: 2,
        title: 'Purple Cow',
        author: 'Seth Godin',
        duration: '10.25',
        order: 2,
        genre: 'Marketing',
    },
    {
        id: 3,
        title: 'The design of everyday things',
        author: 'Don Norman',
        duration: '09.25',
        order: 3,
        genre: 'Design',
    },
]

function Screen() {
    return ( <
        div id = "screen" >
        <
        div >
        <
        div / >
        <
        div / >
        <
        /div>{' '} <
        div >
        <
        div / >
        <
        div / >
        <
        /div>{' '} <
        div >
        <
        div / >
        <
        /div>{' '} <
        div >
        <
        div / >
        <
        /div>{' '} <
        /div>
    )
}

function Podcast() {
    return ( <
        >
        <
        h2 className = "text-center mt-6" > #02 - Practice</h2>

      <p className= "text-center text-gray-400 text-sm font-semibold mt-2" >
        Digital Marketing - By Setup Cast { ' ' } <
        /p>{' '} <
        />
    )
}

function Actions() {
    return ( <
        div className = "flex items-center justify-center"
        id = "actions" >
        <
        button type = "button"
        id = "rewind" >
        <
        img alt = "dots"
        className = "icon"
        src = "/rewind.svg" / >
        <
        /button>{' '} <
        button type = "button"
        id = "play" >
        <
        img alt = "play"
        className = "icon"
        src = "/play.svg" / >
        <
        /button>{' '} <
        button type = "button"
        id = "forward" >
        <
        img alt = "forward"
        className = "icon"
        src = "/forward.svg" / >
        <
        /button>{' '} <
        /div>
    )
}

function Status() {
    return ( <
        div className = "flex mt-4 items-center justify-center w-full text-md"
        id = "bar" >
        <
        p className = "text-gray-400 font-semibold" > 4.10 < /p>{' '} <
        div id = "slider" >
        <
        div style = {
            { width: '50%' } }
        /> <div style={{ left: '50%' }} / >
        <
        /div>{' '} <
        p className = "text-gray-400 font-semibold" > 12: 02 < /p>{' '} <
        /div>
    )
}

function History({ history }) {
    return ( <
        div id = "history" >
        <
        h3 className = "font-semibold text-xl text-gray-600" > Recently played < /h3>{' '} <
        ul className = "list-style-none" > { ' ' } {
            history.map((podcast) => ( <
                HistoryItem key = { podcast.id }
                itemInfo = { podcast }
                />
            ))
        } { ' ' } <
        /ul>{' '} <
        /div>
    )
}

function HistoryItem({ itemInfo }) {
    console.log(itemInfo)
    return ( <
        li className = "flex items-center" >
        <
        div / >
        <
        div className = "flex items-center" >
        <
        p >
        <
        span className = "font-semibold text-lg" > { ' ' }# { itemInfo.id } - { itemInfo.title } { ' ' } <
        /span>{' '} <
        span className = "text-sm text-gray-500" >
        By { itemInfo.author } - { itemInfo.duration } <
        /span> <
        /p> <
        button type = "button" >
        <
        img alt = "play"
        className = "icon"
        src = "/play.svg" / >
        <
        /button> <
        /div> <
        /li>
    )
}

export default function App() {
    return ( <
        main >
        <
        Navbar title = "Now testplaying" / >
        <
        Screen / >
        <
        Podcast / >
        <
        Status / >
        <
        Actions / >
        <
        History history = { initialHistory }
        />{' '} <
        /main>
    )
}