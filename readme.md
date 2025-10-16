![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

# Sistema Pessoal

<img style="width:250px"  src="./img/Logo.jpg" alt="Logo empresa">

## Índice

- <a href="#funcionalidades">Funcionalidades do Projeto</a>
- <a href="#layout">Layout</a>
- <a href="#ideias-a-ser-utilizada">Idéias a ser utilizada</a>

### Funcionalidades do Projeto

### Layout

### Ideias a ser utilizada

- [x] LINGUAGEM DE PROGRAMAÇÃO JAVASCRIPT
- [x] TAREFAS COM BANCO DE DADOS EM MYSQL
- [ ] PROJETOS COM BANCO DE DADOS EM MYSQL
- [ ] MOVIMENTAÇÃO FINANCEIRA COM BANCO DE DADOS EM POSTGRESQL
- [ ] AGENDA DE ORAÇÃO COM BANCO DE DADOS EM SQL SERVER
- [ ] ESTUDOS BÍBLICOS COM BANCO EM MICROSOFT ACCESS

### Aprendizado

| DATA       | DESCRIÇÃO                                                              | Situação     |
| ---------- | ---------------------------------------------------------------------- | ------------ |
| 25/10/2025 | APRENDER A FAZER UM README PARA APRESENTAÇÃO DO TRABALHO NO **GITHUB** | Em Andamento |
|            |                                                                        |              |
|            |                                                                        |              |
|            |                                                                        |              |
|            |                                                                        |              |

### Desenvolvimento

|     DATA | DESCRIÇÃO                        | STATUS    |
| -------: | -------------------------------- | --------- |
| 25.10.16 | Criar Tabelas de Tarefa no MySql | Concluído |
|          |                                  |           |
|          |                                  |           |
|          |                                  |           |
|          |                                  |           |

Tabela de Tarefas

```MySql
CREATE TABLE `bdgersonbernardo`.`tbtarefa` (
  `nm_ID_Tarefa` INT NOT NULL AUTO_INCREMENT,
  `st_Esfera_Tarefa` VARCHAR(120) NOT NULL,
  `st_Descricao_Tarefa` VARCHAR(120) NOT NULL,
  `dt_DtEntrada_Tarefa` DATE NOT NULL,
  `dt_DtConclusao_Tarefa` DATE NULL,
  `st_Status_Tarefa` VARCHAR(45) NULL,
  `nm_PercentualAndamento` DECIMAL(2) NULL,
  PRIMARY KEY (`nm_ID_Tarefa`));
```

Sub Tabela de Tarefas

```
CREATE TABLE `bdgersonbernardo`.`tbtarefasub` (
  `nm_ID_TarefaSub` INT NOT NULL AUTO_INCREMENT,
  `nm_ID_Tarefa` INT NULL,
  `st_Descricao_TarefaSub` VARCHAR(120) NULL,
  `dt_DtCriacao_TarefaSub` DATE NULL,
  `dt_DtConclusao_TarefaSub` DATE NULL,
  `st_Situacao_TarefaSub` VARCHAR(45) NULL,
  PRIMARY KEY (`nm_ID_TarefaSub`),
  INDEX `Fk_TarefaSub_idx` (`nm_ID_Tarefa` ASC) VISIBLE,
  CONSTRAINT `Fk_TarefaSub`
    FOREIGN KEY (`nm_ID_Tarefa`)
    REFERENCES `bdgersonbernardo`.`tbtarefa` (`nm_ID_Tarefa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
```

#### AUTOR

<img style="width:150px"  src="./img/Gerson 02.jpeg" alt="Foto Pessoal (Gerson Bernardo)">
