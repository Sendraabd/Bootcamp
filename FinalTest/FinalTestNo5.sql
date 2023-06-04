Create table AGENT(
	agent_code varchar,
	agent_name varchar,
	agent_office varchar,
	basic_commision int,
	Constraint pk_agent_code Primary key (agent_code)

);
insert into AGENT (agent_code, agent_name, agent_office)
values 
('AG001', 'LIDYA', 'Jakarta'),
('AG002', 'RUDI', 'Bali'),
('AG003', 'DICKY', 'Bali'),
('AG004', 'DAVID', 'Surabaya'),
('AG005', 'FARIZ', 'Surabaya')



Create table CLIENT(
	client_number varchar,
	client_name varchar,
	birth_date date,
	Constraint pk_client_number Primary key (client_number)

);
insert into CLIENT (client_number, client_name, birth_date)
values 
('CL001', 'WAYNE ROONEY', '5/11/1956'),
('CL002', 'RYAN GIGS', '9/3/1972'),
('CL003', 'DAVID BECKHAM', '9/3/1985'),
('CL004', 'MICHAEL OWEN', '9/3/2012')


Create table POLICY(
	policy_number varchar,
	policy_submit_date date,
	premium money,
	discount int,
	commission money,
	client_number varchar,
	agent_code varchar,
	policy_status varchar,
	policy_due_date date,
	
	Constraint pk_policy_number Primary key (policy_number),
	Constraint clientnumber_fk foreign key (client_number) references CLIENT(client_number),
	Constraint agentcode_fk foreign key (agent_code) references AGENT(agent_code)
);

insert into POLICY (policy_number,policy_submit_date,premium,discount,commission,client_number,agent_code,policy_status)
values ('001', '1/5/2018', '18.600.000.00',10,'930.000.00','CLOO1','AG001','INFORCE'),
('002', '1/5/2018', '2.500.00.00',10,'125.000.00','CLOO2','AG002','INFORCE'),
('003', '1/10/2018', '2.500.00.00',10,'125.000.00','CLOO3','AG003','TERMINATE'),
('004', '1/25/2018', '4.000.00.00',10,'200.000.00','CLOO3','AG002','PROPOSAL'),
('005', '1/25/2018', '2.625.00.00',10,'131.250.00','CLOO4','AG002','PROPOSAL')


//5.1
Select a.policy_submit_date, ,b.birthday
	from policy a
 	join agent b on b.agent_code=a.agent.code
	join client c on c.client_number=a.client_number
	Where policy_submit_date > '1-10-2018' ORDER BY birth_date= 9;
//5.2
Select a.policy_status, ,b.agent_office
	from policy a
 	join agent b on b.agent_code=a.agent.code
	where policy_status = 'INFORCE' ORDER BY agent_office= 'JAKARTA';
//5.3