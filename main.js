document.getElementById('base').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
  document.getElementById("h22").innerHTML = "Cores da Base";
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletebaselabel').style.display = "block";
}
else{document.getElementById("h22").innerHTML = "Cores da Base";}
});

document.getElementById('gola1').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
  document.getElementById("h22").innerHTML = "Cores da Gola Externa";
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletebaselabel').style.display = "block";}
  else{
      document.getElementById("h22").innerHTML = "Cores da Gola Externa";
  }
});
document.getElementById('punho').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores do Punho";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores do Punho";
      }
});
document.getElementById('vista').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores da Manga";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Manga";
      }
});
document.getElementById('botoes').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores dos Botões";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores dos Botões";
      }
});
document.getElementById('gola2').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores da Gola Interna";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Gola Interna";
      }
});
document.getElementById('vista1').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores da Carcela 1";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Carcela 1";
      }
});
document.getElementById('bolsobtn').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores da Carcela 2";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Carcela 2";
      }
});


  document.getElementById('cor1').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#fff";
        document.getElementById('corbasecostas').style.fill = "#fff";
        document.getElementById('CB').style.backgroundColor = "#fff";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#fff";
        document.getElementById('ge').style.backgroundColor = "#fff";
        document.getElementById('golaEE').style.fill = "#fff";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#fff";
        document.getElementById('punho1').style.fill = "#fff";
        document.getElementById('punho3').style.fill = "#fff";
        document.getElementById('punho4').style.fill = "#fff";
        document.getElementById('PU').style.backgroundColor = "#fff";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fff");
        document.getElementById('manga1').style.fill = "#fff";
        document.getElementById('VE').style.backgroundColor = "#fff";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#fff";
        document.getElementById('BT').style.backgroundColor = "#fff";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#fff";
        document.getElementById('gi').style.backgroundColor = "#fff";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#fff";
        document.getElementById('VD').style.backgroundColor = "#fff";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#fff";
        document.getElementById('BSF').style.backgroundColor = "#fff";
    }
      });
    document.getElementById('cor2').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#f8f72c";
        document.getElementById('corbasecostas').style.fill = "#f8f72c";
        document.getElementById('CB').style.backgroundColor = "#f8f72c";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#f8f72c";
        document.getElementById('ge').style.backgroundColor = "#f8f72c";
        document.getElementById('golaEE').style.fill = "#f8f72c";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#f8f72c";
        document.getElementById('punho1').style.fill = "#f8f72c";
        document.getElementById('punho3').style.fill = "#f8f72c";
        document.getElementById('punho4').style.fill = "#f8f72c";
        document.getElementById('PU').style.backgroundColor = "#f8f72c";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#f8f72c");
        document.getElementById('manga1').style.fill = "#f8f72c";
        document.getElementById('VE').style.backgroundColor = "#f8f72c";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#f8f72c";
        document.getElementById('BT').style.backgroundColor = "#f8f72c";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#f8f72c";
        document.getElementById('gi').style.backgroundColor = "#f8f72c";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#f8f72c";
        document.getElementById('VD').style.backgroundColor = "#f8f72c";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#f8f72c";
        document.getElementById('BSF').style.backgroundColor = "#f8f72c";
    }
      });
  document.getElementById('cor3').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#f7e04c";
        document.getElementById('corbasecostas').style.fill = "#f7e04c";
        document.getElementById('CB').style.backgroundColor = "#f7e04c";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#f7e04c";
        document.getElementById('ge').style.backgroundColor = "#f7e04c";
        document.getElementById('golaEE').style.fill = "#f7e04c";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#f7e04c";
        document.getElementById('punho1').style.fill = "#f7e04c";
        document.getElementById('punho3').style.fill = "#f7e04c";
        document.getElementById('punho4').style.fill = "#f7e04c";
        document.getElementById('PU').style.backgroundColor = "#f7e04c";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#f7e04c");
        document.getElementById('manga1').style.fill = "#f7e04c";
        document.getElementById('VE').style.backgroundColor = "#f7e04c";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#f7e04c";
        document.getElementById('BT').style.backgroundColor = "#f7e04c";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#f7e04c";
        document.getElementById('gi').style.backgroundColor = "#f7e04c";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#f7e04c";
        document.getElementById('VD').style.backgroundColor = "#f7e04c";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#f7e04c";
        document.getElementById('BSF').style.backgroundColor = "#f7e04c";
    }
      });
  document.getElementById('cor4').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#f8d235";
        document.getElementById('corbasecostas').style.fill = "#f8d235";
        document.getElementById('CB').style.backgroundColor = "#f8d235";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#f8d235";
        document.getElementById('ge').style.backgroundColor = "#f8d235";
        document.getElementById('golaEE').style.fill = "#f8d235";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#f8d235";
        document.getElementById('punho1').style.fill = "#f8d235";
        document.getElementById('punho3').style.fill = "#f8d235";
        document.getElementById('punho4').style.fill = "#f8d235";
        document.getElementById('PU').style.backgroundColor = "#f8d235";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#f8d235");
        document.getElementById('manga1').style.fill = "#f8d235";
        document.getElementById('VE').style.backgroundColor = "#f8d235";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#f8d235";
        document.getElementById('BT').style.backgroundColor = "#f8d235";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#f8d235";
        document.getElementById('gi').style.backgroundColor = "#f8d235";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#f8d235";
        document.getElementById('VD').style.backgroundColor = "#f8d235";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#f8d235";
        document.getElementById('BSF').style.backgroundColor = "#f8d235";
    }
      });
  document.getElementById('cor5').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#fe4d06";
        document.getElementById('corbasecostas').style.fill = "#fe4d06";
        document.getElementById('CB').style.backgroundColor = "#fe4d06";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#fe4d06";
        document.getElementById('ge').style.backgroundColor = "#fe4d06";
        document.getElementById('golaEE').style.fill = "#fe4d06";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#fe4d06";
        document.getElementById('punho1').style.fill = "#fe4d06";
        document.getElementById('punho3').style.fill = "#fe4d06";
        document.getElementById('punho4').style.fill = "#fe4d06";
        document.getElementById('PU').style.backgroundColor = "#fe4d06";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fe4d06");
        document.getElementById('manga1').style.fill = "#fe4d06";
        document.getElementById('VE').style.backgroundColor = "#fe4d06";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#fe4d06";
        document.getElementById('BT').style.backgroundColor = "#fe4d06";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#fe4d06";
        document.getElementById('gi').style.backgroundColor = "#fe4d06";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#fe4d06";
        document.getElementById('VD').style.backgroundColor = "#fe4d06";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#fe4d06";
        document.getElementById('BSF').style.backgroundColor = "#fe4d06";
    }
      });
  document.getElementById('cor6').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#ff6521";
        document.getElementById('corbasecostas').style.fill = "#ff6521";
        document.getElementById('CB').style.backgroundColor = "#ff6521";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#ff6521";
        document.getElementById('ge').style.backgroundColor = "#ff6521";
        document.getElementById('golaEE').style.fill = "#ff6521";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#ff6521";
        document.getElementById('punho1').style.fill = "#ff6521";
        document.getElementById('punho3').style.fill = "#ff6521";
        document.getElementById('punho4').style.fill = "#ff6521";
        document.getElementById('PU').style.backgroundColor = "#ff6521";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ff6521");
        document.getElementById('manga1').style.fill = "#ff6521";
        document.getElementById('VE').style.backgroundColor = "#ff6521";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#ff6521";
        document.getElementById('BT').style.backgroundColor = "#ff6521";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#ff6521";
        document.getElementById('gi').style.backgroundColor = "#ff6521";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#ff6521";
        document.getElementById('VD').style.backgroundColor = "#ff6521";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#ff6521";
        document.getElementById('BSF').style.backgroundColor = "#ff6521";
    }
      });
  document.getElementById('cor7').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#ff932a";
        document.getElementById('corbasecostas').style.fill = "#ff932a";
        document.getElementById('CB').style.backgroundColor = "#ff932a";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#ff932a";
        document.getElementById('ge').style.backgroundColor = "#ff932a";
        document.getElementById('golaEE').style.fill = "#ff932a";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#ff932a";
        document.getElementById('punho1').style.fill = "#ff932a";
        document.getElementById('punho3').style.fill = "#ff932a";
        document.getElementById('punho4').style.fill = "#ff932a";
        document.getElementById('PU').style.backgroundColor = "#ff932a";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ff932a");
        document.getElementById('manga1').style.fill = "#ff932a";
        document.getElementById('VE').style.backgroundColor = "#ff932a";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#ff932a";
        document.getElementById('BT').style.backgroundColor = "#ff932a";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#ff932a";
        document.getElementById('gi').style.backgroundColor = "#ff932a";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#ff932a";
        document.getElementById('VD').style.backgroundColor = "#ff932a";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#ff932a";
        document.getElementById('BSF').style.backgroundColor = "#ff932a";
    }
      });
  document.getElementById('cor8').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#faef2c";
        document.getElementById('corbasecostas').style.fill = "#faef2c";
        document.getElementById('CB').style.backgroundColor = "#faef2c";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#faef2c";
        document.getElementById('ge').style.backgroundColor = "#faef2c";
        document.getElementById('golaEE').style.fill = "#faef2c";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#faef2c";
        document.getElementById('punho1').style.fill = "#faef2c";
        document.getElementById('punho4').style.fill = "#faef2c";
        document.getElementById('punho3').style.fill = "#faef2c";
        document.getElementById('PU').style.backgroundColor = "#faef2c";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#faef2c");
        document.getElementById('manga1').style.fill = "#faef2c";
        document.getElementById('VE').style.backgroundColor = "#faef2c";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#faef2c";
        document.getElementById('BT').style.backgroundColor = "#faef2c";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#faef2c";
        document.getElementById('gi').style.backgroundColor = "#faef2c";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#faef2c";
        document.getElementById('VD').style.backgroundColor = "#faef2c";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#faef2c";
        document.getElementById('BSF').style.backgroundColor = "#faef2c";
    }
      });
  document.getElementById('cor9').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#d61f20";
        document.getElementById('corbasecostas').style.fill = "#d61f20";
        document.getElementById('CB').style.backgroundColor = "#d61f20";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#d61f20";
        document.getElementById('ge').style.backgroundColor = "#d61f20";
        document.getElementById('golaEE').style.fill = "#d61f20";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#d61f20";
        document.getElementById('punho1').style.fill = "#d61f20";
        document.getElementById('punho3').style.fill = "#d61f20";
        document.getElementById('punho4').style.fill = "#d61f20";
        document.getElementById('PU').style.backgroundColor = "#d61f20";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#d61f20");
        document.getElementById('manga1').style.fill = "#d61f20";
        document.getElementById('VE').style.backgroundColor = "#d61f20";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#d61f20";
        document.getElementById('BT').style.backgroundColor = "#d61f20";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#d61f20";
        document.getElementById('gi').style.backgroundColor = "#d61f20";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#d61f20";
        document.getElementById('VD').style.backgroundColor = "#d61f20";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#d61f20";
        document.getElementById('BSF').style.backgroundColor = "#d61f20";
    }
      });
  document.getElementById('cor10').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#ac1a27";
        document.getElementById('corbasecostas').style.fill = "#ac1a27";
        document.getElementById('CB').style.backgroundColor = "#ac1a27";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#ac1a27";
        document.getElementById('ge').style.backgroundColor = "#ac1a27";
        document.getElementById('golaEE').style.fill = "#ac1a27";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#ac1a27";
        document.getElementById('punho1').style.fill = "#ac1a27";
        document.getElementById('punho3').style.fill = "#ac1a27";
        document.getElementById('punho4').style.fill = "#ac1a27";
        document.getElementById('PU').style.backgroundColor = "#ac1a27";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ac1a27");
        document.getElementById('manga1').style.fill = "#ac1a27";
        document.getElementById('VE').style.backgroundColor = "#ac1a27";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#ac1a27";
        document.getElementById('BT').style.backgroundColor = "#ac1a27";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#ac1a27";
        document.getElementById('gi').style.backgroundColor = "#ac1a27";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#ac1a27";
        document.getElementById('VD').style.backgroundColor = "#ac1a27";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#ac1a27";
        document.getElementById('BSF').style.backgroundColor = "#ac1a27";
    }
      });
  document.getElementById('cor11').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#662235";
        document.getElementById('corbasecostas').style.fill = "#662235";
        document.getElementById('CB').style.backgroundColor = "#662235";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#662235";
        document.getElementById('ge').style.backgroundColor = "#662235";
        document.getElementById('golaEE').style.fill = "#662235";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#662235";
        document.getElementById('punho1').style.fill = "#662235";
        document.getElementById('punho3').style.fill = "#662235";
        document.getElementById('punho4').style.fill = "#662235";
        document.getElementById('PU').style.backgroundColor = "#662235";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#662235");
        document.getElementById('manga1').style.fill = "#662235";
        document.getElementById('VE').style.backgroundColor = "#662235";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#662235";
        document.getElementById('BT').style.backgroundColor = "#662235";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#662235";
        document.getElementById('gi').style.backgroundColor = "#662235";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#662235";
        document.getElementById('VD').style.backgroundColor = "#662235";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#662235";
        document.getElementById('BSF').style.backgroundColor = "#662235";
    }
      });
      document.getElementById('cor12').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#5b3254";
        document.getElementById('corbasecostas').style.fill = "#5b3254";
        document.getElementById('CB').style.backgroundColor = "#5b3254";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#5b3254";
        document.getElementById('ge').style.backgroundColor = "#5b3254";
        document.getElementById('golaEE').style.fill = "#5b3254";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#5b3254";
        document.getElementById('punho1').style.fill = "#5b3254";
        document.getElementById('punho3').style.fill = "#5b3254";
        document.getElementById('punho4').style.fill = "#5b3254";
        document.getElementById('PU').style.backgroundColor = "#5b3254";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#5b3254");
        document.getElementById('manga1').style.fill = "#5b3254";
        document.getElementById('VE').style.backgroundColor = "#5b3254";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#5b3254";
        document.getElementById('BT').style.backgroundColor = "#5b3254";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#5b3254";
        document.getElementById('gi').style.backgroundColor = "#5b3254";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#5b3254";
        document.getElementById('VD').style.backgroundColor = "#5b3254";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#5b3254";
        document.getElementById('BSF').style.backgroundColor = "#5b3254";
    }
      });
      document.getElementById('cor13').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#f0a6c5";
        document.getElementById('corbasecostas').style.fill = "#f0a6c5";
        document.getElementById('CB').style.backgroundColor = "#f0a6c5";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#f0a6c5";
        document.getElementById('ge').style.backgroundColor = "#f0a6c5";
        document.getElementById('golaEE').style.fill = "#f0a6c5";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#f0a6c5";
        document.getElementById('punho1').style.fill = "#f0a6c5";
        document.getElementById('punho3').style.fill = "#f0a6c5";
        document.getElementById('punho4').style.fill = "#f0a6c5";
        document.getElementById('PU').style.backgroundColor = "#f0a6c5";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#f0a6c5");
        document.getElementById('manga1').style.fill = "#f0a6c5";
        document.getElementById('VE').style.backgroundColor = "#f0a6c5";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#f0a6c5";
        document.getElementById('BT').style.backgroundColor = "#f0a6c5";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#f0a6c5";
        document.getElementById('gi').style.backgroundColor = "#f0a6c5";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#f0a6c5";
        document.getElementById('VD').style.backgroundColor = "#f0a6c5";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#f0a6c5";
        document.getElementById('BSF').style.backgroundColor = "#f0a6c5";
    }
      });
    document.getElementById('cor14').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#e5327a";
        document.getElementById('corbasecostas').style.fill = "#e5327a";
        document.getElementById('CB').style.backgroundColor = "#e5327a";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#e5327a";
        document.getElementById('ge').style.backgroundColor = "#e5327a";
        document.getElementById('golaEE').style.fill = "#e5327a";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#e5327a";
        document.getElementById('punho1').style.fill = "#e5327a";
        document.getElementById('punho3').style.fill = "#e5327a";
        document.getElementById('punho4').style.fill = "#e5327a";
        document.getElementById('PU').style.backgroundColor = "#e5327a";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#e5327a");
        document.getElementById('manga1').style.fill = "#e5327a";
        document.getElementById('VE').style.backgroundColor = "#e5327a";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#e5327a";
        document.getElementById('BT').style.backgroundColor = "#e5327a";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#e5327a";
        document.getElementById('gi').style.backgroundColor = "#e5327a";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#e5327a";
        document.getElementById('VD').style.backgroundColor = "#e5327a";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#e5327a";
        document.getElementById('BSF').style.backgroundColor = "#e5327a";
    }
      });
        document.getElementById('cor15').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#a19ec0";
        document.getElementById('corbasecostas').style.fill = "#a19ec0";
        document.getElementById('CB').style.backgroundColor = "#a19ec0";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#a19ec0";
        document.getElementById('ge').style.backgroundColor = "#a19ec0";
        document.getElementById('golaEE').style.fill = "#a19ec0";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#a19ec0";
        document.getElementById('punho1').style.fill = "#a19ec0";
        document.getElementById('punho3').style.fill = "#a19ec0";
        document.getElementById('punho4').style.fill = "#a19ec0";
        document.getElementById('PU').style.backgroundColor = "#a19ec0";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#a19ec0");
        document.getElementById('manga1').style.fill = "#a19ec0";
        document.getElementById('VE').style.backgroundColor = "#a19ec0";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#a19ec0";
        document.getElementById('BT').style.backgroundColor = "#a19ec0";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#a19ec0";
        document.getElementById('gi').style.backgroundColor = "#a19ec0";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#a19ec0";
        document.getElementById('VD').style.backgroundColor = "#a19ec0";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#a19ec0";
        document.getElementById('BSF').style.backgroundColor = "#a19ec0";
    }
      });  
  document.getElementById('cor16').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#6f366d";
        document.getElementById('corbasecostas').style.fill = "#6f366d";
        document.getElementById('CB').style.backgroundColor = "#6f366d";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#6f366d";
        document.getElementById('ge').style.backgroundColor = "#6f366d";
        document.getElementById('golaEE').style.fill = "#6f366d";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#6f366d";
        document.getElementById('punho1').style.fill = "#6f366d";
        document.getElementById('punho3').style.fill = "#6f366d";
        document.getElementById('punho4').style.fill = "#6f366d";
        document.getElementById('PU').style.backgroundColor = "#6f366d";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#6f366d");
        document.getElementById('manga1').style.fill = "#6f366d";
        document.getElementById('VE').style.backgroundColor = "#6f366d";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#6f366d";
        document.getElementById('BT').style.backgroundColor = "#6f366d";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#6f366d";
        document.getElementById('gi').style.backgroundColor = "#6f366d";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#6f366d";
        document.getElementById('VD').style.backgroundColor = "#6f366d";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#6f366d";
        document.getElementById('BSF').style.backgroundColor = "#6f366d";
    }
      });
    document.getElementById('cor17').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#d8bc8d";
        document.getElementById('corbasecostas').style.fill = "#d8bc8d";
        document.getElementById('CB').style.backgroundColor = "#d8bc8d";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#d8bc8d";
        document.getElementById('ge').style.backgroundColor = "#d8bc8d";
        document.getElementById('golaEE').style.fill = "#d8bc8d";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#d8bc8d";
        document.getElementById('punho1').style.fill = "#d8bc8d";
        document.getElementById('punho3').style.fill = "#d8bc8d";
        document.getElementById('punho4').style.fill = "#d8bc8d";
        document.getElementById('PU').style.backgroundColor = "#d8bc8d";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#d8bc8d");
        document.getElementById('manga1').style.fill = "#d8bc8d";
        document.getElementById('VE').style.backgroundColor = "#d8bc8d";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#d8bc8d";
        document.getElementById('BT').style.backgroundColor = "#d8bc8d";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#d8bc8d";
        document.getElementById('gi').style.backgroundColor = "#d8bc8d";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#d8bc8d";
        document.getElementById('VD').style.backgroundColor = "#d8bc8d";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#d8bc8d";
        document.getElementById('BSF').style.backgroundColor = "#d8bc8d";
    }
      });
  document.getElementById('cor18').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#af9681";
        document.getElementById('corbasecostas').style.fill = "#af9681";
        document.getElementById('CB').style.backgroundColor = "#af9681";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#af9681";
        document.getElementById('ge').style.backgroundColor = "#af9681";
        document.getElementById('golaEE').style.fill = "#af9681";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#af9681";
        document.getElementById('punho1').style.fill = "#af9681";
        document.getElementById('punho3').style.fill = "#af9681";
        document.getElementById('punho4').style.fill = "#af9681";
        document.getElementById('PU').style.backgroundColor = "#af9681";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#af9681");
        document.getElementById('manga1').style.fill = "#af9681";
        document.getElementById('VE').style.backgroundColor = "#af9681";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#af9681";
        document.getElementById('BT').style.backgroundColor = "#af9681";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#af9681";
        document.getElementById('gi').style.backgroundColor = "#af9681";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#af9681";
        document.getElementById('VD').style.backgroundColor = "#af9681";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#af9681";
        document.getElementById('BSF').style.backgroundColor = "#af9681";
    }
      });
  document.getElementById('cor19').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#746861";
        document.getElementById('corbasecostas').style.fill = "#746861";
        document.getElementById('CB').style.backgroundColor = "#746861";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#746861";
        document.getElementById('ge').style.backgroundColor = "#746861";
        document.getElementById('golaEE').style.fill = "#746861";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#746861";
        document.getElementById('punho1').style.fill = "#746861";
        document.getElementById('punho3').style.fill = "#746861";
        document.getElementById('punho4').style.fill = "#746861";
        document.getElementById('PU').style.backgroundColor = "#746861";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#746861");
        document.getElementById('manga1').style.fill = "#746861";
        document.getElementById('VE').style.backgroundColor = "#746861";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#746861";
        document.getElementById('BT').style.backgroundColor = "#746861";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#746861";
        document.getElementById('gi').style.backgroundColor = "#746861";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#746861";
        document.getElementById('VD').style.backgroundColor = "#746861";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#746861";
        document.getElementById('BSF').style.backgroundColor = "#746861";
    }
      });
  document.getElementById('cor20').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#3e2a1d";
        document.getElementById('corbasecostas').style.fill = "#3e2a1d";
        document.getElementById('CB').style.backgroundColor = "#3e2a1d";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#3e2a1d";
        document.getElementById('ge').style.backgroundColor = "#3e2a1d";
        document.getElementById('golaEE').style.fill = "#3e2a1d";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#3e2a1d";
        document.getElementById('punho1').style.fill = "#3e2a1d";
        document.getElementById('punho3').style.fill = "#3e2a1d";
        document.getElementById('punho4').style.fill = "#3e2a1d";
        document.getElementById('PU').style.backgroundColor = "#3e2a1d";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#3e2a1d");
        document.getElementById('manga1').style.fill = "#3e2a1d";
        document.getElementById('VE').style.backgroundColor = "#3e2a1d";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#3e2a1d";
        document.getElementById('BT').style.backgroundColor = "#3e2a1d";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#3e2a1d";
        document.getElementById('gi').style.backgroundColor = "#3e2a1d";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#3e2a1d";
        document.getElementById('VD').style.backgroundColor = "#3e2a1d";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#3e2a1d";
        document.getElementById('BSF').style.backgroundColor = "#3e2a1d";
    }
      });
  document.getElementById('cor21').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#bbbeb5";
        document.getElementById('corbasecostas').style.fill = "#bbbeb5";
        document.getElementById('CB').style.backgroundColor = "#bbbeb5";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#bbbeb5";
        document.getElementById('ge').style.backgroundColor = "#bbbeb5";
        document.getElementById('golaEE').style.fill = "#bbbeb5";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#bbbeb5";
        document.getElementById('punho1').style.fill = "#bbbeb5";
        document.getElementById('punho3').style.fill = "#bbbeb5";
        document.getElementById('punho4').style.fill = "#bbbeb5";
        document.getElementById('PU').style.backgroundColor = "#bbbeb5";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#bbbeb5");
        document.getElementById('manga1').style.fill = "#bbbeb5";
        document.getElementById('VE').style.backgroundColor = "#bbbeb5";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#bbbeb5";
        document.getElementById('BT').style.backgroundColor = "#bbbeb5";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#bbbeb5";
        document.getElementById('gi').style.backgroundColor = "#bbbeb5";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#bbbeb5";
        document.getElementById('VD').style.backgroundColor = "#bbbeb5";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#bbbeb5";
        document.getElementById('BSF').style.backgroundColor = "#bbbeb5";
    }
      });
  document.getElementById('cor22').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#a3b0ad";
        document.getElementById('corbasecostas').style.fill = "#a3b0ad";
        document.getElementById('CB').style.backgroundColor = "#a3b0ad";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#a3b0ad";
        document.getElementById('ge').style.backgroundColor = "#a3b0ad";
        document.getElementById('golaEE').style.fill = "#a3b0ad";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#a3b0ad";
        document.getElementById('punho1').style.fill = "#a3b0ad";
        document.getElementById('punho3').style.fill = "#a3b0ad";
        document.getElementById('punho4').style.fill = "#a3b0ad";
        document.getElementById('PU').style.backgroundColor = "#a3b0ad";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#a3b0ad");
        document.getElementById('manga1').style.fill = "#a3b0ad";
        document.getElementById('VE').style.backgroundColor = "#a3b0ad";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#a3b0ad";
        document.getElementById('BT').style.backgroundColor = "#a3b0ad";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#a3b0ad";
        document.getElementById('gi').style.backgroundColor = "#a3b0ad";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#a3b0ad";
        document.getElementById('VD').style.backgroundColor = "#a3b0ad";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#a3b0ad";
        document.getElementById('BSF').style.backgroundColor = "#a3b0ad";
    }
      });
  document.getElementById('cor23').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#637577";
        document.getElementById('corbasecostas').style.fill = "#637577";
        document.getElementById('CB').style.backgroundColor = "#637577";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#637577";
        document.getElementById('ge').style.backgroundColor = "#637577";
        document.getElementById('golaEE').style.fill = "#637577";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#637577";
        document.getElementById('punho1').style.fill = "#637577";
        document.getElementById('punho3').style.fill = "#637577";
        document.getElementById('punho4').style.fill = "#637577";
        document.getElementById('PU').style.backgroundColor = "#637577";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#637577");
        document.getElementById('manga1').style.fill = "#637577";
        document.getElementById('VE').style.backgroundColor = "#637577";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#637577";
        document.getElementById('BT').style.backgroundColor = "#637577";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#637577";
        document.getElementById('gi').style.backgroundColor = "#637577";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#637577";
        document.getElementById('VD').style.backgroundColor = "#637577";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#637577";
        document.getElementById('BSF').style.backgroundColor = "#637577";
    }
      });
    document.getElementById('cor24').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#425058";
        document.getElementById('corbasecostas').style.fill = "#425058";
        document.getElementById('CB').style.backgroundColor = "#425058";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#425058";
        document.getElementById('ge').style.backgroundColor = "#425058";
        document.getElementById('golaEE').style.fill = "#425058";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#425058";
        document.getElementById('punho1').style.fill = "#425058";
        document.getElementById('punho3').style.fill = "#425058";
        document.getElementById('punho4').style.fill = "#425058";
        document.getElementById('PU').style.backgroundColor = "#425058";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#425058");
        document.getElementById('manga1').style.fill = "#425058";
        document.getElementById('VE').style.backgroundColor = "#425058";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#425058";
        document.getElementById('BT').style.backgroundColor = "#425058";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#425058";
        document.getElementById('gi').style.backgroundColor = "#425058";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#425058";
        document.getElementById('VD').style.backgroundColor = "#425058";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#425058";
        document.getElementById('BSF').style.backgroundColor = "#425058";
    }
      });
    document.getElementById('cor25').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#98efed";
        document.getElementById('corbasecostas').style.fill = "#98efed";
        document.getElementById('CB').style.backgroundColor = "#98efed";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#98efed";
        document.getElementById('ge').style.backgroundColor = "#98efed";
        document.getElementById('golaEE').style.fill = "#98efed";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#98efed";
        document.getElementById('punho1').style.fill = "#98efed";
        document.getElementById('punho3').style.fill = "#98efed";
        document.getElementById('punho4').style.fill = "#98efed";
        document.getElementById('PU').style.backgroundColor = "#98efed";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#98efed");
        document.getElementById('manga1').style.fill = "#98efed";
        document.getElementById('VE').style.backgroundColor = "#98efed";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#98efed";
        document.getElementById('BT').style.backgroundColor = "#98efed";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#98efed";
        document.getElementById('gi').style.backgroundColor = "#98efed";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#98efed";
        document.getElementById('VD').style.backgroundColor = "#98efed";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#98efed";
        document.getElementById('BSF').style.backgroundColor = "#98efed";
    }
      });
    document.getElementById('cor26').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#93bd55";
        document.getElementById('corbasecostas').style.fill = "#93bd55";
        document.getElementById('CB').style.backgroundColor = "#93bd55";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#93bd55";
        document.getElementById('ge').style.backgroundColor = "#93bd55";
        document.getElementById('golaEE').style.fill = "#93bd55";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#93bd55";
        document.getElementById('punho1').style.fill = "#93bd55";
        document.getElementById('punho3').style.fill = "#93bd55";
        document.getElementById('punho4').style.fill = "#93bd55";
        document.getElementById('PU').style.backgroundColor = "#93bd55";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#93bd55");
        document.getElementById('manga1').style.fill = "#93bd55";
        document.getElementById('VE').style.backgroundColor = "#93bd55";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#93bd55";
        document.getElementById('BT').style.backgroundColor = "#93bd55";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#93bd55";
        document.getElementById('gi').style.backgroundColor = "#93bd55";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#93bd55";
        document.getElementById('VD').style.backgroundColor = "#93bd55";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#93bd55";
        document.getElementById('BSF').style.backgroundColor = "#93bd55";
    }
      });
  document.getElementById('cor27').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#47b559";
        document.getElementById('corbasecostas').style.fill = "#47b559";
        document.getElementById('CB').style.backgroundColor = "#47b559";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#47b559";
        document.getElementById('ge').style.backgroundColor = "#47b559";
        document.getElementById('golaEE').style.fill = "#47b559";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#47b559";
        document.getElementById('punho1').style.fill = "#47b559";
        document.getElementById('punho3').style.fill = "#47b559";
        document.getElementById('punho4').style.fill = "#47b559";
        document.getElementById('PU').style.backgroundColor = "#47b559";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#47b559");
        document.getElementById('manga1').style.fill = "#47b559";
        document.getElementById('VE').style.backgroundColor = "#47b559";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#47b559";
        document.getElementById('BT').style.backgroundColor = "#47b559";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#47b559";
        document.getElementById('gi').style.backgroundColor = "#47b559";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#47b559";
        document.getElementById('VD').style.backgroundColor = "#47b559";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#47b559";
        document.getElementById('BSF').style.backgroundColor = "#47b559";
    }
      });
  document.getElementById('cor28').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#008749";
        document.getElementById('corbasecostas').style.fill = "#008749";
        document.getElementById('CB').style.backgroundColor = "#008749";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#008749";
        document.getElementById('ge').style.backgroundColor = "#008749";
        document.getElementById('golaEE').style.fill = "#008749";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#008749";
        document.getElementById('punho1').style.fill = "#008749";
        document.getElementById('punho3').style.fill = "#008749";
        document.getElementById('punho4').style.fill = "#008749";
        document.getElementById('PU').style.backgroundColor = "#008749";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#008749");
        document.getElementById('manga1').style.fill = "#008749";
        document.getElementById('VE').style.backgroundColor = "#008749";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#008749";
        document.getElementById('BT').style.backgroundColor = "#008749";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#008749";
        document.getElementById('gi').style.backgroundColor = "#008749";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#008749";
        document.getElementById('VD').style.backgroundColor = "#008749";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#008749";
        document.getElementById('BSF').style.backgroundColor = "#008749";
    }
      });
    document.getElementById('cor29').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#009899";
        document.getElementById('corbasecostas').style.fill = "#009899";
        document.getElementById('CB').style.backgroundColor = "#009899";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#009899";
        document.getElementById('ge').style.backgroundColor = "#009899";
        document.getElementById('golaEE').style.fill = "#009899";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#009899";
        document.getElementById('punho1').style.fill = "#009899";
        document.getElementById('punho3').style.fill = "#009899";
        document.getElementById('punho4').style.fill = "#009899";
        document.getElementById('PU').style.backgroundColor = "#009899";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#009899");
        document.getElementById('manga1').style.fill = "#009899";
        document.getElementById('VE').style.backgroundColor = "#009899";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#009899";
        document.getElementById('BT').style.backgroundColor = "#009899";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#009899";
        document.getElementById('gi').style.backgroundColor = "#009899";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#009899";
        document.getElementById('VD').style.backgroundColor = "#009899";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#009899";
        document.getElementById('BSF').style.backgroundColor = "#009899";
    }
      });
    document.getElementById('cor30').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#008b5f";
        document.getElementById('corbasecostas').style.fill = "#008b5f";
        document.getElementById('CB').style.backgroundColor = "#008b5f";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#008b5f";
        document.getElementById('ge').style.backgroundColor = "#008b5f";
        document.getElementById('golaEE').style.fill = "#008b5f";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#008b5f";
        document.getElementById('punho1').style.fill = "#008b5f";
        document.getElementById('punho3').style.fill = "#008b5f";
        document.getElementById('punho4').style.fill = "#008b5f";
        document.getElementById('PU').style.backgroundColor = "#008b5f";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#008b5f");
        document.getElementById('manga1').style.fill = "#008b5f";
        document.getElementById('VE').style.backgroundColor = "#008b5f";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#008b5f";
        document.getElementById('BT').style.backgroundColor = "#008b5f";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#008b5f";
        document.getElementById('gi').style.backgroundColor = "#008b5f";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#008b5f";
        document.getElementById('VD').style.backgroundColor = "#008b5f";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#008b5f";
        document.getElementById('BSF').style.backgroundColor = "#008b5f";
    }
      });
  document.getElementById('cor31').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#27785b";
        document.getElementById('corbasecostas').style.fill = "#27785b";
        document.getElementById('CB').style.backgroundColor = "#27785b";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#27785b";
        document.getElementById('ge').style.backgroundColor = "#27785b";
        document.getElementById('golaEE').style.fill = "#27785b";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#27785b";
        document.getElementById('punho1').style.fill = "#27785b";
        document.getElementById('punho3').style.fill = "#27785b";
        document.getElementById('punho4').style.fill = "#27785b";
        document.getElementById('PU').style.backgroundColor = "#27785b";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#27785b");
        document.getElementById('manga1').style.fill = "#27785b";
        document.getElementById('VE').style.backgroundColor = "#27785b";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#27785b";
        document.getElementById('BT').style.backgroundColor = "#27785b";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#27785b";
        document.getElementById('gi').style.backgroundColor = "#27785b";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#27785b";
        document.getElementById('VD').style.backgroundColor = "#27785b";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#27785b";
        document.getElementById('BSF').style.backgroundColor = "#27785b";
    }
      });
    document.getElementById('cor32').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#00614e";
        document.getElementById('corbasecostas').style.fill = "#00614e";
        document.getElementById('CB').style.backgroundColor = "#00614e";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#00614e";
        document.getElementById('ge').style.backgroundColor = "#00614e";
        document.getElementById('golaEE').style.fill = "#00614e";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#00614e";
        document.getElementById('punho1').style.fill = "#00614e";
        document.getElementById('punho3').style.fill = "#00614e";
        document.getElementById('punho4').style.fill = "#00614e";
        document.getElementById('PU').style.backgroundColor = "#00614e";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#00614e");
        document.getElementById('manga1').style.fill = "#00614e";
        document.getElementById('VE').style.backgroundColor = "#00614e";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#00614e";
        document.getElementById('BT').style.backgroundColor = "#00614e";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#00614e";
        document.getElementById('gi').style.backgroundColor = "#00614e";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#00614e";
        document.getElementById('VD').style.backgroundColor = "#00614e";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#00614e";
        document.getElementById('BSF').style.backgroundColor = "#00614e";
    }
      });
    document.getElementById('cor33').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#3f7488";
        document.getElementById('corbasecostas').style.fill = "#3f7488";
        document.getElementById('CB').style.backgroundColor = "#3f7488";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#3f7488";
        document.getElementById('ge').style.backgroundColor = "#3f7488";
        document.getElementById('golaEE').style.fill = "#3f7488";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#3f7488";
        document.getElementById('punho1').style.fill = "#3f7488";
        document.getElementById('punho3').style.fill = "#3f7488";
        document.getElementById('punho4').style.fill = "#3f7488";
        document.getElementById('PU').style.backgroundColor = "#3f7488";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#3f7488");
        document.getElementById('manga1').style.fill = "#3f7488";
        document.getElementById('VE').style.backgroundColor = "#3f7488";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#3f7488";
        document.getElementById('BT').style.backgroundColor = "#3f7488";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#3f7488";
        document.getElementById('gi').style.backgroundColor = "#3f7488";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#3f7488";
        document.getElementById('VD').style.backgroundColor = "#3f7488";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#3f7488";
        document.getElementById('BSF').style.backgroundColor = "#3f7488";
    }
      });
      document.getElementById('cor34').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#336f87";
        document.getElementById('corbasecostas').style.fill = "#336f87";
        document.getElementById('CB').style.backgroundColor = "#336f87";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#336f87";
        document.getElementById('ge').style.backgroundColor = "#336f87";
        document.getElementById('golaEE').style.fill = "#336f87";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#336f87";
        document.getElementById('punho1').style.fill = "#336f87";
        document.getElementById('punho3').style.fill = "#336f87";
        document.getElementById('punho4').style.fill = "#336f87";
        document.getElementById('PU').style.backgroundColor = "#336f87";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#336f87");
        document.getElementById('manga1').style.fill = "#336f87";
        document.getElementById('VE').style.backgroundColor = "#336f87";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#336f87";
        document.getElementById('BT').style.backgroundColor = "#336f87";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#336f87";
        document.getElementById('gi').style.backgroundColor = "#336f87";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#336f87";
        document.getElementById('VD').style.backgroundColor = "#336f87";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#336f87";
        document.getElementById('BSF').style.backgroundColor = "#336f87";
    }
      });
    document.getElementById('cor35').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#2e4f37";
        document.getElementById('corbasecostas').style.fill = "#2e4f37";
        document.getElementById('CB').style.backgroundColor = "#2e4f37";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#2e4f37";
        document.getElementById('ge').style.backgroundColor = "#2e4f37";
        document.getElementById('golaEE').style.fill = "#2e4f37";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#2e4f37";
        document.getElementById('punho1').style.fill = "#2e4f37";
        document.getElementById('punho3').style.fill = "#2e4f37";
        document.getElementById('punho4').style.fill = "#2e4f37";
        document.getElementById('PU').style.backgroundColor = "#2e4f37";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#2e4f37");
        document.getElementById('manga1').style.fill = "#2e4f37";
        document.getElementById('VE').style.backgroundColor = "#2e4f37";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#2e4f37";
        document.getElementById('BT').style.backgroundColor = "#2e4f37";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#2e4f37";
        document.getElementById('gi').style.backgroundColor = "#2e4f37";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#2e4f37";
        document.getElementById('VD').style.backgroundColor = "#2e4f37";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#2e4f37";
        document.getElementById('BSF').style.backgroundColor = "#2e4f37";
    }
      });
      document.getElementById('cor36').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#154332";
        document.getElementById('corbasecostas').style.fill = "#154332";
        document.getElementById('CB').style.backgroundColor = "#154332";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#154332";
        document.getElementById('ge').style.backgroundColor = "#154332";
        document.getElementById('golaEE').style.fill = "#154332";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#154332";
        document.getElementById('punho1').style.fill = "#154332";
        document.getElementById('punho3').style.fill = "#154332";
        document.getElementById('punho4').style.fill = "#154332";
        document.getElementById('PU').style.backgroundColor = "#154332";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#154332");
        document.getElementById('manga1').style.fill = "#154332";
        document.getElementById('VE').style.backgroundColor = "#154332";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#154332";
        document.getElementById('BT').style.backgroundColor = "#154332";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#154332";
        document.getElementById('gi').style.backgroundColor = "#154332";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#154332";
        document.getElementById('VD').style.backgroundColor = "#154332";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#154332";
        document.getElementById('BSF').style.backgroundColor = "#154332";
    }
      });
  document.getElementById('cor37').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#72b3d0";
        document.getElementById('corbasecostas').style.fill = "#72b3d0";
        document.getElementById('CB').style.backgroundColor = "#72b3d0";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#72b3d0";
        document.getElementById('ge').style.backgroundColor = "#72b3d0";
        document.getElementById('golaEE').style.fill = "#72b3d0";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#72b3d0";
        document.getElementById('punho1').style.fill = "#72b3d0";
        document.getElementById('punho3').style.fill = "#72b3d0";
        document.getElementById('punho4').style.fill = "#72b3d0";
        document.getElementById('PU').style.backgroundColor = "#72b3d0";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#72b3d0");
        document.getElementById('manga1').style.fill = "#72b3d0";
        document.getElementById('VE').style.backgroundColor = "#72b3d0";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#72b3d0";
        document.getElementById('BT').style.backgroundColor = "#72b3d0";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#72b3d0";
        document.getElementById('gi').style.backgroundColor = "#72b3d0";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#72b3d0";
        document.getElementById('VD').style.backgroundColor = "#72b3d0";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#72b3d0";
        document.getElementById('BSF').style.backgroundColor = "#72b3d0";
    }
      });
      document.getElementById('cor38').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#55a1c9";
        document.getElementById('corbasecostas').style.fill = "#55a1c9";
        document.getElementById('CB').style.backgroundColor = "#55a1c9";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#55a1c9";
        document.getElementById('ge').style.backgroundColor = "#55a1c9";
        document.getElementById('golaEE').style.fill = "#55a1c9";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#55a1c9";
        document.getElementById('punho1').style.fill = "#55a1c9";
        document.getElementById('punho3').style.fill = "#55a1c9";
        document.getElementById('punho4').style.fill = "#55a1c9";
        document.getElementById('PU').style.backgroundColor = "#55a1c9";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#55a1c9");
        document.getElementById('manga1').style.fill = "#55a1c9";
        document.getElementById('VE').style.backgroundColor = "#55a1c9";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#55a1c9";
        document.getElementById('BT').style.backgroundColor = "#55a1c9";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#55a1c9";
        document.getElementById('gi').style.backgroundColor = "#55a1c9";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#55a1c9";
        document.getElementById('VD').style.backgroundColor = "#55a1c9";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#55a1c9";
        document.getElementById('BSF').style.backgroundColor = "#55a1c9";
    }
      });
    document.getElementById('cor39').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#01a6cc";
        document.getElementById('corbasecostas').style.fill = "#01a6cc";
        document.getElementById('CB').style.backgroundColor = "#01a6cc";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#01a6cc";
        document.getElementById('ge').style.backgroundColor = "#01a6cc";
        document.getElementById('golaEE').style.fill = "#01a6cc";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#01a6cc";
        document.getElementById('punho1').style.fill = "#01a6cc";
        document.getElementById('punho3').style.fill = "#01a6cc";
        document.getElementById('punho4').style.fill = "#01a6cc";
        document.getElementById('PU').style.backgroundColor = "#01a6cc";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#01a6cc");
        document.getElementById('manga1').style.fill = "#01a6cc";
        document.getElementById('VE').style.backgroundColor = "#01a6cc";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#01a6cc";
        document.getElementById('BT').style.backgroundColor = "#01a6cc";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#01a6cc";
        document.getElementById('gi').style.backgroundColor = "#01a6cc";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#01a6cc";
        document.getElementById('VD').style.backgroundColor = "#01a6cc";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#01a6cc";
        document.getElementById('BSF').style.backgroundColor = "#01a6cc";
    }
      });
    document.getElementById('cor40').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#008db3";
        document.getElementById('corbasecostas').style.fill = "#008db3";
        document.getElementById('CB').style.backgroundColor = "#008db3";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#008db3";
        document.getElementById('ge').style.backgroundColor = "#008db3";
        document.getElementById('golaEE').style.fill = "#008db3";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#008db3";
        document.getElementById('punho1').style.fill = "#008db3";
        document.getElementById('punho3').style.fill = "#008db3";
        document.getElementById('punho4').style.fill = "#008db3";
        document.getElementById('PU').style.backgroundColor = "#008db3";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#008db3");
        document.getElementById('manga1').style.fill = "#008db3";
        document.getElementById('VE').style.backgroundColor = "#008db3";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#008db3";
        document.getElementById('BT').style.backgroundColor = "#008db3";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#008db3";
        document.getElementById('gi').style.backgroundColor = "#008db3";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#008db3";
        document.getElementById('VD').style.backgroundColor = "#008db3";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#008db3";
        document.getElementById('BSF').style.backgroundColor = "#008db3";
    }
      });
    document.getElementById('cor41').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#1e549a";
        document.getElementById('corbasecostas').style.fill = "#1e549a";
        document.getElementById('CB').style.backgroundColor = "#1e549a";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#1e549a";
        document.getElementById('ge').style.backgroundColor = "#1e549a";
        document.getElementById('golaEE').style.fill = "#1e549a";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#1e549a";
        document.getElementById('punho1').style.fill = "#1e549a";
        document.getElementById('punho3').style.fill = "#1e549a";
        document.getElementById('punho4').style.fill = "#1e549a";
        document.getElementById('PU').style.backgroundColor = "#1e549a";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#1e549a");
        document.getElementById('manga1').style.fill = "#1e549a";
        document.getElementById('VE').style.backgroundColor = "#1e549a";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#1e549a";
        document.getElementById('BT').style.backgroundColor = "#1e549a";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#1e549a";
        document.getElementById('gi').style.backgroundColor = "#1e549a";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#1e549a";
        document.getElementById('VD').style.backgroundColor = "#1e549a";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#1e549a";
        document.getElementById('BSF').style.backgroundColor = "#1e549a";
    }
      });
      document.getElementById('cor42').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#222b6f";
        document.getElementById('corbasecostas').style.fill = "#222b6f";
        document.getElementById('CB').style.backgroundColor = "#222b6f";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#222b6f";
        document.getElementById('ge').style.backgroundColor = "#222b6f";
        document.getElementById('golaEE').style.fill = "#222b6f";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#222b6f";
        document.getElementById('punho1').style.fill = "#222b6f";
        document.getElementById('punho3').style.fill = "#222b6f";
        document.getElementById('punho4').style.fill = "#222b6f";
        document.getElementById('PU').style.backgroundColor = "#222b6f";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#222b6f");
        document.getElementById('manga1').style.fill = "#222b6f";
        document.getElementById('VE').style.backgroundColor = "#222b6f";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#222b6f";
        document.getElementById('BT').style.backgroundColor = "#222b6f";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#222b6f";
        document.getElementById('gi').style.backgroundColor = "#222b6f";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#222b6f";
        document.getElementById('VD').style.backgroundColor = "#222b6f";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#222b6f";
        document.getElementById('BSF').style.backgroundColor = "#222b6f";
    }
      });
  document.getElementById('cor43').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#232f43";
        document.getElementById('corbasecostas').style.fill = "#232f43";
        document.getElementById('CB').style.backgroundColor = "#232f43";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#232f43";
        document.getElementById('ge').style.backgroundColor = "#232f43";
        document.getElementById('golaEE').style.fill = "#232f43";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#232f43";
        document.getElementById('punho1').style.fill = "#232f43";
        document.getElementById('punho3').style.fill = "#232f43";
        document.getElementById('punho4').style.fill = "#232f43";
        document.getElementById('PU').style.backgroundColor = "#232f43";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#232f43");
        document.getElementById('manga1').style.fill = "#232f43";
        document.getElementById('VE').style.backgroundColor = "#232f43";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#232f43";
        document.getElementById('BT').style.backgroundColor = "#232f43";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#232f43";
        document.getElementById('gi').style.backgroundColor = "#232f43";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#232f43";
        document.getElementById('VD').style.backgroundColor = "#232f43";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#232f43";
        document.getElementById('BSF').style.backgroundColor = "#232f43";
    }
      });
      document.getElementById('cor44').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#050610";
        document.getElementById('corbasecostas').style.fill = "#050610";
        document.getElementById('CB').style.backgroundColor = "#050610";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#050610";
        document.getElementById('ge').style.backgroundColor = "#050610";
        document.getElementById('golaEE').style.fill = "#050610";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#050610";
        document.getElementById('punho1').style.fill = "#050610";
        document.getElementById('punho3').style.fill = "#050610";
        document.getElementById('punho4').style.fill = "#050610";
        document.getElementById('PU').style.backgroundColor = "#050610";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#050610");
        document.getElementById('manga1').style.fill = "#050610";
        document.getElementById('VE').style.backgroundColor = "#050610";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#050610";
        document.getElementById('BT').style.backgroundColor = "#050610";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#050610";
        document.getElementById('gi').style.backgroundColor = "#050610";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#050610";
        document.getElementById('VD').style.backgroundColor = "#050610";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#050610";
        document.getElementById('BSF').style.backgroundColor = "#050610";
    }
      });
  document.getElementById('cor45').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#233651";
        document.getElementById('corbasecostas').style.fill = "#233651";
        document.getElementById('CB').style.backgroundColor = "#233651";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#233651";
        document.getElementById('ge').style.backgroundColor = "#233651";
        document.getElementById('golaEE').style.fill = "#233651";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#233651";
        document.getElementById('punho1').style.fill = "#233651";
        document.getElementById('punho3').style.fill = "#233651";
        document.getElementById('punho4').style.fill = "#233651";
        document.getElementById('PU').style.backgroundColor = "#233651";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#233651");
        document.getElementById('manga1').style.fill = "#233651";
        document.getElementById('VE').style.backgroundColor = "#233651";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#233651";
        document.getElementById('BT').style.backgroundColor = "#233651";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#233651";
        document.getElementById('gi').style.backgroundColor = "#233651";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#233651";
        document.getElementById('VD').style.backgroundColor = "#233651";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#233651";
        document.getElementById('BSF').style.backgroundColor = "#233651";
    }
      });
  document.getElementById('cor46').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#232838";
        document.getElementById('corbasecostas').style.fill = "#232838";
        document.getElementById('CB').style.backgroundColor = "#232838";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#232838";
        document.getElementById('ge').style.backgroundColor = "#232838";
        document.getElementById('golaEE').style.fill = "#232838";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#232838";
        document.getElementById('punho1').style.fill = "#232838";
        document.getElementById('punho3').style.fill = "#232838";
        document.getElementById('punho4').style.fill = "#232838";
        document.getElementById('PU').style.backgroundColor = "#232838";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#232838");
        document.getElementById('manga1').style.fill = "#232838";
        document.getElementById('VE').style.backgroundColor = "#232838";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#232838";
        document.getElementById('BT').style.backgroundColor = "#232838";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#232838";
        document.getElementById('gi').style.backgroundColor = "#232838";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#232838";
        document.getElementById('VD').style.backgroundColor = "#232838";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#232838";
        document.getElementById('BSF').style.backgroundColor = "#232838";
    }
      });
    document.getElementById('cor47').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#1e1e23";
        document.getElementById('corbasecostas').style.fill = "#1e1e23";
        document.getElementById('CB').style.backgroundColor = "#1e1e23";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#1e1e23";
        document.getElementById('ge').style.backgroundColor = "#1e1e23";
        document.getElementById('golaEE').style.fill = "#1e1e23";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#1e1e23";
        document.getElementById('punho1').style.fill = "#1e1e23";
        document.getElementById('punho3').style.fill = "#1e1e23";
        document.getElementById('punho4').style.fill = "#1e1e23";
        document.getElementById('PU').style.backgroundColor = "#1e1e23";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#1e1e23");
        document.getElementById('manga1').style.fill = "#1e1e23";
        document.getElementById('VE').style.backgroundColor = "#1e1e23";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#1e1e23";
        document.getElementById('BT').style.backgroundColor = "#1e1e23";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#1e1e23";
        document.getElementById('gi').style.backgroundColor = "#1e1e23";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#1e1e23";
        document.getElementById('VD').style.backgroundColor = "#1e1e23";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#1e1e23";
        document.getElementById('BSF').style.backgroundColor = "#1e1e23";
    }
      });
  document.getElementById('cor48').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#20201d";
        document.getElementById('corbasecostas').style.fill = "#20201d";
        document.getElementById('CB').style.backgroundColor = "#20201d";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#20201d";
        document.getElementById('ge').style.backgroundColor = "#20201d";
        document.getElementById('golaEE').style.fill = "#20201d";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#20201d";
        document.getElementById('punho1').style.fill = "#20201d";
        document.getElementById('punho3').style.fill = "#20201d";
        document.getElementById('punho4').style.fill = "#20201d";
        document.getElementById('PU').style.backgroundColor = "#20201d";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#20201d");
        document.getElementById('manga1').style.fill = "#20201d";
        document.getElementById('VE').style.backgroundColor = "#20201d";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#20201d";
        document.getElementById('BT').style.backgroundColor = "#20201d";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#20201d";
        document.getElementById('gi').style.backgroundColor = "#20201d";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#20201d";
        document.getElementById('VD').style.backgroundColor = "#20201d";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#20201d";
        document.getElementById('BSF').style.backgroundColor = "#20201d";
    }
      });
  document.getElementById('cor49').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#ccd0cf";
        document.getElementById('corbasecostas').style.fill = "#ccd0cf";
        document.getElementById('CB').style.backgroundColor = "#ccd0cf";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#ccd0cf";
        document.getElementById('ge').style.backgroundColor = "#ccd0cf";
        document.getElementById('golaEE').style.fill = "#ccd0cf";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#ccd0cf";
        document.getElementById('punho1').style.fill = "#ccd0cf";
        document.getElementById('punho3').style.fill = "#ccd0cf";
        document.getElementById('punho4').style.fill = "#ccd0cf";
        document.getElementById('PU').style.backgroundColor = "#ccd0cf";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ccd0cf");
        document.getElementById('manga1').style.fill = "#ccd0cf";
        document.getElementById('VE').style.backgroundColor = "#ccd0cf";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#ccd0cf";
        document.getElementById('BT').style.backgroundColor = "#ccd0cf";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#ccd0cf";
        document.getElementById('gi').style.backgroundColor = "#ccd0cf";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#ccd0cf";
        document.getElementById('VD').style.backgroundColor = "#ccd0cf";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#ccd0cf";
        document.getElementById('BSF').style.backgroundColor = "#ccd0cf";
    }
      });
  document.getElementById('cor50').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#838787";
        document.getElementById('corbasecostas').style.fill = "#838787";
        document.getElementById('CB').style.backgroundColor = "#838787";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#838787";
        document.getElementById('ge').style.backgroundColor = "#838787";
        document.getElementById('golaEE').style.fill = "#838787";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#838787";
        document.getElementById('punho1').style.fill = "#838787";
        document.getElementById('punho3').style.fill = "#838787";
        document.getElementById('punho4').style.fill = "#838787";
        document.getElementById('PU').style.backgroundColor = "#838787";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#838787");
        document.getElementById('manga1').style.fill = "#838787";
        document.getElementById('VE').style.backgroundColor = "#838787";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#838787";
        document.getElementById('BT').style.backgroundColor = "#838787";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#838787";
        document.getElementById('gi').style.backgroundColor = "#838787";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#838787";
        document.getElementById('VD').style.backgroundColor = "#838787";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#838787";
        document.getElementById('BSF').style.backgroundColor = "#838787";
    }
      });
  document.getElementById('cor51').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#5d6164";
        document.getElementById('corbasecostas').style.fill = "#5d6164";
        document.getElementById('CB').style.backgroundColor = "#5d6164";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#5d6164";
        document.getElementById('ge').style.backgroundColor = "#5d6164";
        document.getElementById('golaEE').style.fill = "#5d6164";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#5d6164";
        document.getElementById('punho1').style.fill = "#5d6164";
        document.getElementById('punho3').style.fill = "#5d6164";
        document.getElementById('punho4').style.fill = "#5d6164";
        document.getElementById('PU').style.backgroundColor = "#5d6164";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#5d6164");
        document.getElementById('manga1').style.fill = "#5d6164";
        document.getElementById('VE').style.backgroundColor = "#5d6164";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#5d6164";
        document.getElementById('BT').style.backgroundColor = "#5d6164";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#5d6164";
        document.getElementById('gi').style.backgroundColor = "#5d6164";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#5d6164";
        document.getElementById('VD').style.backgroundColor = "#5d6164";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#5d6164";
        document.getElementById('BSF').style.backgroundColor = "#5d6164";
    }
      });
      //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('bolsofrente').style.visibility = "visible";
    }else {
      document.getElementById('bolsofrente').style.visibility = "hidden";
    }
  });

  document.getElementById('switch-shadow3').addEventListener('click', function(e){
    if(document.getElementById('switch-shadow3').checked){
      document.querySelector('.costas3').style.display = "none";
      document.querySelector('.costaslonga').style.display = "block";
      document.querySelector('.costas5').style.display = "block";
      document.getElementById('manga1').style.display = "none";
      document.getElementById('manga').style.display = "none";
      document.querySelector('.frente4').style.display = "block";
      document.querySelector('.frente3').style.display = "none";
      document.querySelector('.costas4').style.display = "block";
      document.getElementById('punho1').style.display = "none";
      document.getElementById('punho2').style.display = "none";
      document.querySelector('.frente5').style.display = "block";
      document.querySelector('.frente6').style.display = "block";
    }else {
      document.querySelector('.costas3').style.display = "block";
      document.querySelector('.costaslonga').style.display = "none";
      document.querySelector('.costas5').style.display = "none";
      document.getElementById('manga1').style.display = "block";
      document.getElementById('manga').style.display = "block";
      document.querySelector('.frente4').style.display = "none";
      document.querySelector('.frente3').style.display = "block";
      document.querySelector('.costas4').style.display = "none";
      document.getElementById('punho1').style.display = "block";
      document.getElementById('punho2').style.display = "block";
      document.querySelector('.frente5').style.display = "none";
      document.querySelector('.frente6').style.display = "none";
    }
  });



  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "Malha.png");
      
    })
  })
 });

//upload
var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

var canvas = new fabric.Canvas('list');
let uploader = document.getElementById("uploader");
uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
var image = new Image();
image.src = e.target.result;
image.onload = function() {
  var img = new fabric.Image(image);
  img.set({
    left: 100,
    top: 60
  });
  img.scaleToWidth(200);
  canvas.add(img).setActiveObject(img).renderAll();
  }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
x: 0.5,
y: -0.5,
offsetY: 16,
cursorStyle: 'pointer',
mouseUpHandler: deleteObject,
render: renderIcon,
cornerSize: 24
});


function deleteObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
        canvas.remove(target);
    canvas.requestRenderAll();
};

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
var size = this.cornerSize;
ctx.save();
ctx.translate(left, top);
ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
ctx.drawImage(imga, -size/2, -size/2, size, size);
ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.visibility = "visible";
    }else {
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.visibility = "hidden" ;
    }
  });


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});