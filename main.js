import Glicol from 'glicol'

const glicol = new Glicol()

document.getElementById("run").onclick = () => {
    let freq = document.getElementById("freq").value
    let amp = document.getElementById("amp").value / 100
    glicol.run(`o: sin ${freq} >> mul ${amp}`);
}

document.getElementById("freq").oninput = (e) => {
    console.log("freq:", e.target.value)
    glicol.send_msg(`o, 0, 0, ${e.target.value}`)
}

document.getElementById("amp").oninput = (e) => {
    console.log("amp:", e.target.value/100)
    glicol.send_msg(`o, 1, 0, ${e.target.value/100}`)
}