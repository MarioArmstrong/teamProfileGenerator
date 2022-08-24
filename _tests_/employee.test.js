const index = require('../index');
const Employee = require('../lib/employee');

describe('Employee', () => {

    describe('getName', () => {
        it('should return', () => {
            const expectedName = 'Tom';
            const employee = new Employee(expectedName, 5, 'tom@foo.com');
            expect(employee.getName()).toBe(expectedName);
        });
    });

    describe('getId', () => {
        it('should return', () => {
            const expectedId = 5;
            const employee = new Employee('Ben', expectedId, 'tom@foo.com');
            expect(employee.getId()).toBe(expectedId);
        });
    });

    describe('getEmail', () => {
        it('should return', () => {
            const expectedEmail = 'foo@bar.com';
            const employee = new Employee('foo', 8, expectedEmail);
            expect(employee.getEmail()).toBe(expectedEmail);
        });
    });

    describe('getRole', () => {
        it('should return', () => {
            const expectedRole = 'employee';
            const employee = new Employee('foo', 8,'tom@foo.com');
            expect(employee.getRole()).toBe(expectedRole);
        });
    });




});//END describe