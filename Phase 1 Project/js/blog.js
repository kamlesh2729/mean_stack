
function addData()
        {
            var txtval = document.getElementById('myfile').value,
            listNode = document.getElementById('main'),
            divNode = document.createElement("div"),
            txtNode = document.createTextNode(txtval);
            divNode.setAttribute("class","home-article-img");
            divNode.appendChild(txtNode);
            listNode.appendChild(divNode);

            var txtval = document.getElementById('title').value,
            listNode = document.getElementById('main2'),
            divNode = document.createElement("div"),
            txtNode = document.createTextNode(txtval);
            divNode.setAttribute("class","home-article-content");
            divNode.appendChild(txtNode);
            listNode.appendChild(divNode);

            var txtval = document.getElementById('name').value,
            listNode = document.getElementById('main2'),
            divNode = document.createElement("div"),
            txtNode = document.createTextNode(txtval);
            divNode.setAttribute("class","home-article-content");
            divNode.appendChild(txtNode);
            listNode.appendChild(divNode);

            var txtval = document.getElementById('datemin').value,
            listNode = document.getElementById('main2'),
            divNode = document.createElement("div"),
            txtNode = document.createTextNode(txtval);
            divNode.setAttribute("class","home-article-content");
            divNode.appendChild(txtNode);
            listNode.appendChild(divNode);

        }