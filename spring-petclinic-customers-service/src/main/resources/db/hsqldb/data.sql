INSERT INTO types VALUES (1, 'cat');
INSERT INTO types VALUES (2, 'dog');
INSERT INTO types VALUES (3, 'lizard');
INSERT INTO types VALUES (4, 'snake');
INSERT INTO types VALUES (5, 'bird');
INSERT INTO types VALUES (6, 'hamster');

INSERT INTO owners VALUES (1, 'George', 'Franklin', '110 W. Liberty St.', 'Madison', '6085551023');
INSERT INTO owners VALUES (2, 'Betty', 'Davis', '638 Cardinal Ave.', 'Sun Prairie', '6085551749');
INSERT INTO owners VALUES (3, 'Eduardo', 'Rodriquez', '2693 Commerce St.', 'McFarland', '6085558763');
INSERT INTO owners VALUES (4, 'Harold', 'Davis', '563 Friendly St.', 'Windsor', '6085553198');
INSERT INTO owners VALUES (5, 'Peter', 'McTavish', '2387 S. Fair Way', 'Madison', '6085552765');
INSERT INTO owners VALUES (6, 'Jean', 'Coleman', '105 N. Lake St.', 'Monona', '6085552654');
INSERT INTO owners VALUES (7, 'Jeff', 'Black', '1450 Oak Blvd.', 'Monona', '6085555387');
INSERT INTO owners VALUES (8, 'Maria', 'Escobito', '345 Maple St.', 'Madison', '6085557683');
INSERT INTO owners VALUES (9, 'David', 'Schroeder', '2749 Blackhawk Trail', 'Madison', '6085559435');
INSERT INTO owners VALUES (10, 'Carlos', 'Estaban', '2335 Independence La.', 'Waunakee', '6085555487');

INSERT INTO pets VALUES (1, 'Leo', '2010-09-07', 1, 1);
INSERT INTO pets VALUES (2, 'Basil', '2012-08-06', 6, 2);
INSERT INTO pets VALUES (3, 'Rosy', '2011-04-17', 2, 3);
INSERT INTO pets VALUES (4, 'Jewel', '2010-03-07', 2, 3);
INSERT INTO pets VALUES (5, 'Iggy', '2010-11-30', 3, 4);
INSERT INTO pets VALUES (6, 'George', '2010-01-20', 4, 5);
INSERT INTO pets VALUES (7, 'Samantha', '2012-09-04', 1, 6);
INSERT INTO pets VALUES (8, 'Max', '2012-09-04', 1, 6);
INSERT INTO pets VALUES (9, 'Lucky', '2011-08-06', 5, 7);
INSERT INTO pets VALUES (10, 'Mulligan', '2007-02-24', 2, 8);
INSERT INTO pets VALUES (11, 'Freddy', '2010-03-09', 5, 9);
INSERT INTO pets VALUES (12, 'Lucky', '2010-06-24', 2, 10);
INSERT INTO pets VALUES (13, 'Sly', '2012-06-08', 1, 10);

INSERT INTO pet_records VALUES (1, 'Good boy', {ts '2024-01-01 00:00:00.00'}, false, -1, 1);
INSERT INTO pet_records VALUES (2, 'Good boy', {ts '2024-01-01 00:00:00.00'}, false, -1, 2);
INSERT INTO pet_records VALUES (3, 'Good girl', {ts '2024-01-01 00:00:00.00'}, false, -1, 3);
INSERT INTO pet_records VALUES (4, 'Good boy', {ts '2024-01-01 00:00:00.00'}, false, -1, 4);
INSERT INTO pet_records VALUES (5, 'Good girl', {ts '2024-01-01 00:00:00.00'}, false, -1, 5);
INSERT INTO pet_records VALUES (6, 'Good boy', {ts '2024-01-01 00:00:00.00'}, false, -1, 6);
INSERT INTO pet_records VALUES (7, 'Good girl', {ts '2024-01-01 00:00:00.00'}, false, -1, 7);
INSERT INTO pet_records VALUES (8, 'Good girl', {ts '2024-01-01 00:00:00.00'}, false, -1, 8);
INSERT INTO pet_records VALUES (9, 'Good boy', {ts '2024-01-01 00:00:00.00'}, false, -1, 9);
INSERT INTO pet_records VALUES (10, 'Good boy', {ts '2024-01-01 00:00:00.00'}, false, -1, 10);
INSERT INTO pet_records VALUES (11, 'Good boy', {ts '2024-01-01 00:00:00.00'}, false, -1, 11);
INSERT INTO pet_records VALUES (12, 'Good boy', {ts '2024-01-01 00:00:00.00'}, false, -1, 12);
INSERT INTO pet_records VALUES (13, 'Good boy', {ts '2024-01-01 00:00:00.00'}, false, -1, 13);

INSERT INTO courses VALUES(1, 'Erste Hilfe beim Hund', 'Lernen Sie die grundlegenden Erste-Hilfe-Techniken für Hunde. Der Kurs umfasst die Behandlung von Wunden, das Erkennen von Vergiftungen und das richtige Verhalten in Notfällen.', 4);
INSERT INTO courses VALUES(2, 'Katzenverhalten verstehen', 'Dieser Kurs hilft Ihnen, das Verhalten Ihrer Katze besser zu verstehen. Themen sind Kommunikation, Spielverhalten und wie man unerwünschtes Verhalten korrigiert.', 5);
INSERT INTO courses VALUES(3, 'Gesundheitsvorsorge für Haustiere', 'Erfahren Sie, wie Sie die Gesundheit Ihres Haustiers durch regelmäßige Vorsorgeuntersuchungen und Impfungen schützen können. Der Kurs umfasst auch Parasitenbekämpfung und Zahngesundheit.', 3);
