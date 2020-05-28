if ($('body').is('.game')) {
    const answers = ["a", "b", "c", "d"]
    const questions = {
        100: {
            heading: "What is PROPAGATION?",
            a: "Movement through a medium",
            b: "Length of a wave",
            c: "Rate at which a wave travels",
            d: "Speed at which a wave travels",
            correct: "a"
        },
        200: {
            heading: "Sometimes called COMPRESSION WAVES",
            a: "Transverse waves",
            b: "Longitudinal waves",
            c: "Space waves",
            d: "Pressure waves",
            correct: "b"
        },
        300: {
            heading: "3-30 GHz",
            a: "Super High Frequency",
            b: "Very High Frequency",
            c: "High Frequency",
            d: "Extremely High Frequency",
            correct: "a"
        },
        400: {
            heading: "What is the bending of the waves as they move from one medium into another",
            a: "Reflection",
            b: "Diffraction",
            c: "Refraction",
            d: "Absorption",
            correct: "c"
        },
        500: {
            heading: "Virtually all weather phenomena take place in this region",
            a: "Stratosphere",
            b: "Ionosphere",
            c: "Troposphere",
            d: "Mesosphere",
            correct: "c"
        },
        1000: {
            heading: "Is composed of three layers designated D, E, and F",
            a: "Stratosphere",
            b: "Ionosphere",
            c: "Troposphere",
            d: "Mesosphere",
            correct: "b"
        },
        2000: {
            heading: "One-third farther than the natural horizon",
            a: "Radar horizon",
            b: "Radio horizon",
            c: "Virtual horizon",
            d: "Natural horizon",
            correct: "b"
        },
        4000: {
            heading: "often called the ionospheric wave, is radiated in an upward direction and returned to Earth at some distant location because of refraction from the ionosphere.",
            a: "ground wave",
            b: "surface wave",
            c: "space wave",
            d: "sky wave",
            correct: "d"
        },
        8000: {
            heading: "Known as the maximum frequency at which radio waves can be transmitted vertically and refracted back to Earth",
            a: "Critical frequency",
            b: "Maximum frequency",
            c: "Optimum Frequency",
            d: "Terminal frequency",
            correct: "a"
        },
        16000: {
            heading: "Factor that can result in annoying or impossible operating conditions and radio communications.",
            a: "Operating interference",
            b: "Communication interference",
            c: "Communication fault",
            d: "Electromagnetic interference",
            correct: "d"
        },
        32000: {
            heading: "This causes variations in the ionization density.",
            a: "tidal cycle",
            b: "27-day sunspot cycle",
            c: "full moon cycle",
            d: "29-day sunspot cycle",
            correct: "b"
        },
        64000: {
            heading: "Highest around noon when ultraviolet light waves from the sun are the most intense.",
            a: "Maximum usable frequency",
            b: "optimum frequency",
            c: "lowest usable frequency",
            d: "full frequency",
            correct: "a"
        },
        125000: {
            heading: "A wave whose frequency is too low is absorbed to such an extent that it is too weak for reception.",
            a: "Maximum usable frequency",
            b: "optimum frequency",
            c: "lowest usable frequency",
            d: "full frequency",
            correct: "c"
        },
        250000: {
            heading: "The path that a refracted wave follows to the receiver depends on the ___ at which the wave strikes the ionosphere.",
            a: "time",
            b: "velocity",
            c: "frequency",
            d: "angle",
            correct: "d"
        },
        500000: {
            heading: "The __ layers are responsible for high-frequency, long distance transmission.",
            a: "F",
            b: "E",
            c: "D",
            d: "troposphere",
            correct: "f"
        },
        1000000: {
            heading: "The factor that has the greatest adverse effect on radio waves is _______.",
            a: "weather",
            b: "distance",
            c: "absorption",
            d: "temperature",
            correct: "c"
        }
    };

    /**
     *  Setup Ui by disabling all but the current question.
     */
    Object.keys(questions).forEach(setupUi);

    function setupUi(question) {
        if (question !== "100") {
            document.getElementById(question).classList.toggle("disabled");
        }
    }

    /**
     *  If question is clicked, display question and answers. If answer is clicked, check answer accuracy. If correct
     *  answer has been selected, all answers are repainted and disabled until user moves to next question.
     */
    document.body.addEventListener('click', function (event) {
        const element = event.target;

        answers.forEach(resetAnswers);

        function resetAnswers(answer) {
            document.getElementById(answer).style.backgroundColor = "rgba(30, 39, 46, 75%)";
            document.getElementById(answer).disabled = false;
        }

        if (element.id === "btn-quit") {
            quitGame();
        } else if (element.classList.contains("nav-link")) {
            const question = document.activeElement.id;
            localStorage.setItem("question", document.activeElement.id);
            localStorage.setItem("correctAnswer", questions[question]["correct"]);

            document.getElementById('subject').textContent = questions[question]["heading"];
            document.getElementById('a').textContent = questions[question]["a"];
            document.getElementById('b').textContent = questions[question]["b"];
            document.getElementById('c').textContent = questions[question]["c"];
            document.getElementById('d').textContent = questions[question]["d"];
        } else if (element.classList.contains("btn-primary")) {
            checkAnswer(localStorage.getItem("question"));
        }
    });

    /**
     *  Check answer against dictionary value.
     */
    function checkAnswer(question) {
        const selected = document.activeElement.id;

        if (selected === questions[question]["correct"]) {
            const value = document.getElementById(question);
            const selected = document.activeElement.id

            value.style.color = "#0be881";
            value.classList.toggle("disabled");

            answers.forEach(changeColor);

            function changeColor(answer) {
                document.getElementById(answer).disabled = true;

                if (answer === selected) {
                    document.getElementById(answer).style.backgroundColor = "rgba(11, 232, 129, 75%)";
                } else {
                    document.getElementById(answer).style.backgroundColor = "rgba(255, 63, 52, 75%)";
                }
            }

            toggleElement(value)
        } else {
            window.location.href = "game-over.html";
        }
    }

    /**
     *  Change style of current element and enable next question.
     */
    function toggleElement(value) {
        switch (value.id) {
            case "100":
                document.getElementById("200").classList.toggle("disabled");
                break;
            case "200":
                document.getElementById("300").classList.toggle("disabled");
                break;
            case "300":
                document.getElementById("400").classList.toggle("disabled");
                break;
            case "400":
                document.getElementById("500").classList.toggle("disabled");
                break;
            case "500":
                document.getElementById("1000").classList.toggle("disabled");
                break;
            case "1000":
                document.getElementById("2000").classList.toggle("disabled");
                break;
            case "2000":
                document.getElementById("4000").classList.toggle("disabled");
                break;
            case "4000":
                document.getElementById("8000").classList.toggle("disabled");
                break;
            case "8000":
                document.getElementById("160000").classList.toggle("disabled");
                break;
            case "16000":
                document.getElementById("32000").classList.toggle("disabled");
                break;
            case "32000":
                document.getElementById("64000").classList.toggle("disabled");
                break;
            case "640000":
                document.getElementById("125000").classList.toggle("disabled");
                break;
            case "125000":
                document.getElementById("250000").classList.toggle("disabled");
                break;
            case "250000":
                document.getElementById("500000").classList.toggle("disabled");
                break;
            case "500000":
                document.getElementById("1000000").classList.toggle("disabled");
                break;
            case "1000000":
                alert("Hooray, you won!");
                window.location = "index.html";
                break;
        }
    }

    /**
     *  Prompt user before exiting game.
     */
    function quitGame() {
        const choice = confirm("Are you sure you want to leave this page?");

        if (choice === true) {
            window.location = "index.html";
        }
    }
}
