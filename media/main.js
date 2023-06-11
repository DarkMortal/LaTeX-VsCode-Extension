(function (){
    const inputHandler = (evt) => {
        document.getElementById('math').innerHTML = '';
        document.getElementById('math').innerText = `$$${evt.target.value}$$`;
        MathJax.typeset();
    };
    document.getElementById("mathInput").addEventListener('input', inputHandler);
})();