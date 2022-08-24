const index = require('../index');
const Manager = require('../lib/manager');

describe('Manager', () => {
    
    describe('officeNumber', () => {
        it('should return', () => {
            const expectedOfficeNumber = '6191111111';
            const manager = new Manager('tom', 5, 'foo@bar.com', expectedOfficeNumber);
            expect(manager.officeNumber).toBe(expectedOfficeNumber);
        });
    });

    describe('getRole', () => {
        it('should return', () => {
            const expectedRole = 'manager';
            const manager = new Manager('tom', 5, 'foo@bar.com', '6196510990');
            expect(manager.getRole()).toBe(expectedRole);
        });
    });
});//END describe