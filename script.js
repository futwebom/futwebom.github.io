window.onload = function() {
    fetch('URL_DA_PAGINA_A_EXTRAIR_O_CONTEUDO')
        .then(response => response.text())
        .then(data => {
            // Extrai o conteúdo da página usando um elemento temporário
            var tempElement = document.createElement('div');
            tempElement.innerHTML = data;
            var contentToExtract = tempElement.querySelector('SELETOR_DO_CONTEUDO_A_EXTRAIR');

            // Exibe o conteúdo extraído na página
            var contentContainer = document.getElementById('content');
            contentContainer.innerHTML = contentToExtract.innerHTML;
        })
        .catch(error => console.error('Erro ao extrair conteúdo:', error));
};
