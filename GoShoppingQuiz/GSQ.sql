CREATE TABLE category (
    cateId UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    cateName VARCHAR
);
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table product(
	prodid uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
	name varchar,
	category UUID REFERENCES category(cateId),
	stock integer,
	price bigint
);

create table users(
	userId uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
	userName varchar
);

create table ItemProduct(
	cartId uuid  DEFAULT uuid_generate_v4() PRIMARY KEY,
	product UUID REFERENCES product(prodId),
	qty integer,
	subtotal bigint,
	users uuid references users(userId)
);

create table orders(
	orderId uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
	orderNo VARCHAR(20) DEFAULT ord_id(),
	users uuid references users(userId),
	totalprice bigint,
	status varchar
);


CREATE OR REPLACE FUNCTION ord_id() RETURNS VARCHAR AS $$
DECLARE
    order_number VARCHAR;
BEGIN
    order_number := CONCAT('PO-', LPAD(CAST(nextval('seq_ord_number') AS VARCHAR), 3, '0'));
    RETURN order_number;
END;
$$ LANGUAGE plpgsql;

create table orderLineItem(
	ordLineId uuid  DEFAULT uuid_generate_v4() PRIMARY KEY,
	product UUID REFERENCES product(prodId),
	qty integer,
	subtotal bigint,
	"order" uuid references orders(orderId)
);

create table cart(
	itemproduct varchar[]
);