import React, { useState } from 'react';

import { motion } from 'framer-motion';

import './App.css';


function App() {

const [isAnimating, setIsAnimating] = useState(false);


return (

<div className="App">

<motion.div

id="box"

animate={{

x: isAnimating ? 300 : 0,

}}

transition={{ duration: 2 }}

style={{

width: 100,

height: 100,

backgroundColor: 'red',

marginTop: 50,

}}

/>

<button

id="animateButton"

onClick={() => setIsAnimating(!isAnimating)}

style={{ marginTop: 20 }}

>

Iniciar Animação

</button>

</div>

);

}


export default App;