 create database APIBragaccess;
 
 use APIBragaccess;
 
 create table estabelecimentos(
 codEstabelecimento int auto_increment primary key,
 image varchar(255) not null,
 nomeEstabelecimento varchar(30) not null,
 CNPJ varchar(20) not null,
 endereco varchar(60) not null,
 numero int(5) not null,
 PCDfisica tinyint(1) not null,
 PCDintelectual tinyint(1) not null,
 PCDvisual tinyint(1) not null,
 PCDauditiva tinyint(1) not null,
 estacionamento tinyint(1) not null,
 textAccess varchar(500) not null,
 url varchar(255) not null
 
 );

 insert into estabelecimentos(image,nomeEstabelecimento,CNPJ,endereco,url,textAccess ) values ("","bar altas horas","81.452.735/0001-58","Rua Andre ","https://goo.gl/maps/aERzYEAGFZMsa3VPA","Possui rampas na entrada e/banheiro, banheiro acessivel com barras");
 insert into estabelecimentos(image,nomeEstabelecimento,CNPJ,endereco,url,textAccess) values ("","loja expert bijux","60.964.614/0001-15","rua de casas, n100, bairro residencial, bragança paulista","https://goo.gl/maps/grSpBso5HAECZpmi7","Possui rampas");
 insert into estabelecimentos(image,nomeEstabelecimento,CNPJ,endereco,url,textAccess) values ("","Caseirinho Marmitas","28.027.587/0001-41","rua de Cida, n200, bairro Centro, bragança paulista","https://goo.gl/maps/tDVPbG3XqeejUSA87","Possui rampas na entrada, banheiro acessivel, pessoas que conseguem se comunicar com libras");
 insert into estabelecimentos(image,nomeEstabelecimento,CNPJ,endereco,url,textAccess) values ("","Restaurante São Benedido","28.527.587/0001-81","rua de Cima, n600, bairro Centro, bragança paulista","https://goo.gl/maps/3GbwJJyAnvm8fqYU7","Possui rampas na entrada, banheiro acessivel, pessoas que conseguem se comunicar com libras,cardapio com braile");
 
 select * from estabelecimentos;
 
 
 create table avaliacoes(
 nomePessoa varchar(20) not null,
 nomeEstabelecimento varchar(30) not null,
 comentario varchar(500) not null
 );
 
  insert into avaliacoes(nomePessoa,nomeEstabelecimento,comentario) values ("karen","bar altas horas","amei,excelente atendimento");
 
 select * from avaliacoes;
 
 
 
 
