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
alter table policy alter column premium type bigint using premium::bigint
alter table policy alter column commission type bigint using commission::bigint

insert into POLICY (policy_number,policy_submit_date,premium,discount,commission,client_number,agent_code,policy_status)
values ('001', '1/5/2018', '18.600.000.00',10,'930.000.00','CL001','AG001','INFORCE'),
('002', '1/5/2018', '2.500.00.00',10,'125.000.00','CL002','AG002','INFORCE'),
('003', '1/10/2018', '2.500.00.00',10,'125.000.00','CL003','AG003','TERMINATE'),
('004', '1/25/2018', '4.000.00.00',10,'200.000.00','CL003','AG002','PROPOSAL'),
('005', '1/25/2018', '2.625.00.00',10,'131.250.00','CL004','AG002','PROPOSAL')


//5.1
SELECT a.policy_submit_date, c.birth_date
FROM policy a
JOIN AGENT b ON b.agent_code = a.agent_code
JOIN CLIENT c ON c.client_number = a.client_number
WHERE a.policy_submit_date= '2018-01-25'
;
//5.2
SELECT a.policy_status, b.agent_office
FROM policy a
JOIN agent b ON b.agent_code = a.agent_code
WHERE a.policy_status = 'INFORCE'
AND b.agent_office ='Jakarta';
//5.3
UPDATE AGENT SET basic_commision = commission / premium * 100;
//5.5
SELECT a.agent_code, a.agent_name, (p.commission / p.premium) * 100 AS basic_commission
FROM AGENT a
JOIN POLICY p ON p.agent_code = a.agent_code;
//5.4
UPDATE POLICY
SET POLICY_DUE_DATE = DATE_TRUNC('MONTH', POLICY_SUBMIT_DATE) + INTERVAL '30 days' - INTERVAL '1 day';
//5.5
SELECT premium * 0.1 AS prem
FROM POLICY
WHERE premium - (premium * 0.1) > 1000000;
