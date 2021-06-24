const app = require('express')();

app.use('/', (req, res) => {
    res.send(
        `<div class="blob">
            <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx -->
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
            </svg>
        </div>
        <div>
            <h1 class="main-title">[DevTools]
            <p class="second-title">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p></h1>
            <div class="contacts">
                <li><a href="https://www.npmjs.com/package/autodeployjs" target="_blank"><b>CD</b> by NodeJs Auto Deploy</a></li>         
            </div>
        </div>
      
        <style>
            @import url('https://fonts.googleapis.com/css?family=Poppins:700');
            body {
                margin: 0;
                padding: 0;
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                position: relative;
                background: #364de3;                
                display: flex;
                align-items: center;
            }

            .main-title {
                color: white;
                font-size: 15vmin;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                text-transform: uppercase;
                padding-left: 40px;
            }

            .second-title {
                color: white;
                font-size: 5vmin;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                position: relative;
                top: -50px;
            }

            .blob {
                position: absolute;
                top: 0;
                left: 0;
                fill: #023F92;
                width: 50vmax;
                z-index: -1;
                animation: move 10s ease-in-out infinite;
                transform-origin: 50% 50%;
            }

            .contacts li {
                display: inline-block;
                padding-left: 50px;
            }

            .contacts li a {
                color: #bdbdbd;
                text-decoration: none;
                font-family: 'Poppins', sans-serif;
            }

            .contacts li a:hover {
                color: #fff;
            }

            @keyframes move {
            0%   { transform: scale(1)   translate(10px, -30px); }
            38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
            40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
            78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
            80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
            100% { transform: scale(1)   translate(10px, -30px); }
            }

            @media screen and (max-width: 580px) {
                .main-title {
                    font-size: 8vmin;
                }
                .second-title {
                    top: -20px;
                }
            }

            @media screen and (max-width: 380px) {
                .main-title {
                    font-size: 8vmin;
                    padding: 20px;
                }
                .second-title {
                    top: -20px;
                }
                .contacts {
                    padding-left: 0;
                    position: relative;
                    right: 27px;
                }
            }
        </style>`
    );
});

app.listen(8087, _ => {
    console.log('Rodando na porta 8087');
})
