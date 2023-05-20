$(document).ready(function() {
 

   $('header button').click(function() {
        $('form').slideDown(); // Adiciona o efeito de slide
   })

   $('#btn-cancelar').click(function(){
    $('form').slideUp(); // Recolhe o slide
   })

   $('form').on('submit', function(e){
    e.preventDefault(); // Cancela o reload da página
    const urlNovaImg = $('#img-nova').val();
    const novoItem = $('<li style="display: none;"></li>');
    $(`<img src="${urlNovaImg}">`).appendTo(novoItem); // o appendTo pega o elemento e insere na abertura do li e o fechamento
    $(`
    <div class="overlay-imagem-link">
        <a href="${urlNovaImg}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
    </div>
`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#img-nova').val('');
   })
})