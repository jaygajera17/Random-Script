
(function () {

    /**
     * The class to manage the random generator
     * @constructor
     */
    var RandomManager = function () {
        /**
         * Initialize the values box
         * @type {*|jQuery|HTMLElement}
         */
        var $valuesBox = $('#values');

        /**
         * The instructions for the tool
         * @type {*|jQuery|HTMLElement}
         */
        var $instructions = $('#instructions');

        /**
         * The chooser box
         * @type {*|jQuery|HTMLElement}
         */
        var $chooserBox = $('#chooser');

        /**
         * The results box
         * @type {*|jQuery|HTMLElement}
         */
        var $resultBox = $('#results');

        /**
         * The initialization function sort of
         *
         * This handles adding all the handlers the DOM items
         */
        function addHandlers() {
            $valuesBox.on('change keyup blur', handleBoxChange);
            $chooserBox.on('click', 'button', chooseWinner);
        }

        /**
         * When the textarea changes, handle it
         */
        function handleBoxChange() {
            if ($valuesBox.val().trim() === '') {
                $resultBox.fadeOut(200).empty();
                $chooserBox.fadeOut(200, function () {
                    $instructions.fadeIn(200);
                });
            }
            else {
                $instructions.fadeOut(200, function () {
                    $chooserBox.fadeIn(200);
                });
            }
        }

        /**
         * Iterates through the winner and chooses
         */
        function chooseWinner() {
            var values = $valuesBox.val().trim().split("\n");
            if (values.length == 1) {
                handleOneWinner(values);
            }
            else {
                var chopIt = false;
                // if it's too small, let's add some more to it for a cool look
                if (values.length < 20) {
                    values.push.apply(values, values);
                }
                else if (values.length > 50) {
                    chopIt = true;
                }
                shuffleValues(values);
                if (chopIt) {
                    // if it's too long, the animation will suck!
                    values = values.slice(0, 50);
                }

                animateResults(values);
            }
        }

        /**
         * Show the results in an animated fashion
         * @param values
         */
        function animateResults(values) {
            $resultBox.show();
            $resultBox[0].scrollTop = 0;
            $resultBox.empty();

            var resultList = $('<ul />');
            $.each(values, function (i, value) {
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(value));
                resultList.append(li);
            });

            $resultBox.append(resultList);

            $resultBox.animate({
                scrollTop: $resultBox[0].scrollHeight
            });
        }

        /**
         * Shuffle the values
         * @param values
         */
        function shuffleValues(values) {
            for (var i = values.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = values[i];
                values[i] = values[j];
                values[j] = temp;
            }
        }

        /**
         * When people are being silly and choose only one entry
         */
        function handleOneWinner(values) {
            var winner = values[0];
            $('box').html('<div class="jumbotron"><h2>There is only one choice!</h2><P>WHICH YOU ENTER </P>');
        }

        // init the logic
        addHandlers();
    };

    // create the object - it's self managed
    new RandomManager();
})();