import './styles/css/main.css'
import { useState } from 'react'
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
        /div><
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
        /div>{' '} < /
        div >
    )
}

function Podcast({ podcast }) {
    return ( <
        >
        <
        h2 className = "text-center mt-6" > { ' ' }# { podcast.order } - { podcast.title } { ' ' } <
        /h2>{' '} <
        p className = "text-center text-gray-400 text-sm font-semibold mt-2" > { ' ' } { podcast.genre } - By { podcast.author } { ' ' } <
        /p>{' '} < /
        >
    )
}

function Actions({
    setCurrent,
    handleBack,
    isPlaying,
    handlePlay,
    handlePause,
}) {
    const handleNext = () => {
        setCurrent((prev) => prev + 1)
    }
    return ( <
            div className = "flex items-center justify-center"
            id = "actions" >
            <
            button type = "button"
            id = "rewind"
            onClick = { handleBack } >
            <
            img alt = "dots"
            className = "icon"
            src = "/rewind.svg" / >
            <
            /button>{' '} {
            isPlaying ? ( <
                button type = "button"
                id = "pause"
                onClick = { handlePause } >
                <
                img alt = "pause"
                className = "icon"
                src = "/pause.svg" / >
                <
                /button>
            ) : ( <
                button type = "button"
                id = "play"
                onClick = { handlePlay } >
                <
                img alt = "play"
                className = "icon"
                src = "/play.svg" / >
                <
                /button>
            )
        } { ' ' } <
        button type = "button"
    id = "forward"
    onClick = { handleNext } >
        <
        img alt = "forward"
    className = "icon"
    src = "/forward.svg" / >
        <
        /button>{' '} < /
        div >
)
}

function Status({ duration }) {
    return ( <
        div className = "flex mt-4 items-center justify-center w-full text-md"
        id = "bar" >
        <
        p className = "text-gray-400 font-semibold" > 4.10 < /p>{' '} <
        div id = "slider" >
        <
        div style = {
            { width: '50%' }
        }
        /> <div style={{ left: '50%' }} / >
        <
        /div>{' '} <
        p className = "text-gray-400 font-semibold" > { duration } < /p>{' '} < /
        div >
    )
// Importerer useState så vi kan bruke den til å holde på endringer i tilstand
import { useState } from 'react'
// Importerer nødvendige komponenter fra components mappen
import Action from './components/Action'
import History from './components/History'
import Navbar from './components/Navbar'
import Podcast from './components/Podcast'
import Screen from './components/Screen'
import Status from './components/Status'

// Statisk liste med podcasts
const podcasts = [
  {
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

export default function App() {
  // To tilstander vi ønsker å lagre
  // isPlaying er en boolean vi oppdaterer for å vise play eller pause knapp
  // setIsPlaying brukes til å oppdatere isPlaying. Den er en funksjon vi får fra useState
  const [isPlaying, setIsPlaying] = useState(false)

  // current er verdien som holder på hvilken Podcast vi skal vise
  // setCurrent brukes til å oppdatere current. Den er en funksjon vi får fra useState
  // current må bo her da det er flere applikasjoner som må kjenne til verdien
  const [current, setCurrent] = useState(0)

  // Under er diverse funksjoner vi sender til Action og trigges ved klikk på knappene i Action
  const handleBack = () => {
    console.log('CLICKED BACK')
    // Reduserer verdien av "gammel state" (current) med 1
    setCurrent((prev) => prev - 1)
  }

  const handlePlay = () => {
    console.log('PLAY')
    // Setter isPlaying til det motsatte av det den var
    setIsPlaying(!isPlaying)
  }

  const handlePause = () => {
    console.log('PAUSE')
    // Setter isPlaying til det motsatte av det den var
    setIsPlaying(!isPlaying)
  }

  return (
    <main>
      {/* Sender props og verdier til komponenten */}
      <Navbar title="Now playing" />
      <Screen />
      <Podcast podcast={podcasts[current]} />
      <Status duration={podcasts[current]?.duration} />
      {/* Sender props og verdier / funksjoner til komponenten */}
      <Action
        isPlaying={isPlaying}
        setCurrent={setCurrent}
        handleBack={handleBack}
        handlePlay={handlePlay}
        handlePause={handlePause}
      />
      <History history={podcasts} />
    </main>
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
        /ul>{' '} < /
        div >
    )
}

function HistoryItem({ itemInfo }) {
    return ( <
        li className = "flex items-center" >
        <
        div / >
        <
        div className = "flex items-center" >
        <
        p >
        <
        span className = "font-semibold text-lg" > { ' ' }# { itemInfo.order } - { itemInfo.title } { ' ' } <
        /span>{' '} <
        span className = "text-sm text-gray-500" >
        By { itemInfo.author } - { itemInfo.duration } { ' ' } <
        /span>{' '} < /
        p > { ' ' } <
        button type = "button" >
        <
        img alt = "play"
        className = "icon"
        src = "/play.svg" / >
        <
        /button>{' '} < /
        div > { ' ' } <
        /li>
    )
}

export default function App() {
    // State for aktive episode
    const [current, setCurrent] = useState(0)
        // State for spiller
    const [isPlaying, setIsPlaying] = useState(false)

    const handleBack = () => {
        setCurrent((prev) => prev - 1)
    }

    const handlePlay = () => {
        console.log('play')
        setIsPlaying(!isPlaying)
    }
    const handlePause = () => {
        console.log('pause')
        setIsPlaying(!isPlaying)
    }

    return ( <
        main >
        <
        Navbar title = "Now testplaying" / >
        <
        Screen / >
        <
        Podcast podcast = { initialHistory[current] }
        />{' '} <
        Status duration = { initialHistory[current].duration }
        />{' '} <
        Actions isPlaying = { isPlaying }
        setCurrent = { setCurrent }
        handleBack = { handleBack }
        handlePlay = { handlePlay }
        handlePause = { handlePause }
        />{' '} <
        History history = { initialHistory }
        />{' '} < /
        main >
    )
}