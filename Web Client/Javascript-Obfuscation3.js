#cover hex to dec. this is passsword to valid

#view html code
  <html>
  <head>
      <title>Obfuscation JS</title>
      <script type="text/javascript">
      function dechiffre(pass_enc){
          var pass = "70,65,85,88,32,80,65,83,83,87,79,82,68,32,72,65,72,65";
          var tab  = pass_enc.split(',');
                  var tab2 = pass.split(',');var i,j,k,l=0,m,n,o,p = "";i = 0;j = tab.length;
                          k = j + (l) + (n=0);
                          n = tab2.length;
                          for(i = (o=0); i < (k = j = n); i++ ){o = tab[i-l];p += String.fromCharCode((o = tab2[i]));
                                  if(i == 5)break;}
                          for(i = (o=0); i < (k = j = n); i++ ){
                          o = tab[i-l]; 
                                  if(i > 5 && i < k-1)
                                          p += String.fromCharCode((o = tab2[i]));
                          }
          p += String.fromCharCode(tab2[17]);
          pass = p;return pass;
      }
      String["fromCharCode"](dechiffre("\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30"));

      h = window.prompt('Entrez le mot de passe / Enter password');
      alert( dechiffre(h) );

  </script>
  </head>
 #use site: https://www.branah.com/ascii-converter to cover to ascii!
 #line  var pass = "70,65,85,88,32,80,65,83,83,87,79,82,68,32,72,65,72,65";
 #the pass when cover to char is "F,A,U,X, ,P,A,S,S,W,O,R,D, ,H,A,H,A" --> this is bad message!!!!!
 #focus on line: String["fromCharCode"](dechiffre("\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30"));
 #cover hex to ascii (dont foget replay all '\x' with ''): 55,56,54,79,115,69,114,116,107,49,50
 #then cover the result to ascii (the result is Dec.): 7,8,6,O,s,E,r,t,k,1,2
 #read the html file, replay all ',' to '' then we have valid flag!
 # good luck!!! 
