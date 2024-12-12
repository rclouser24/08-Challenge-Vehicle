"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    function Truck(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        var _this = _super.call(this) || this;
        _this.vin = vin;
        _this.color = color;
        _this.model = model;
        _this.make = make;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        _this.towingCapacity = towingCapacity;
        if (wheels.length != 4) {
            _this.wheels = [new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default()];
        }
        else {
            _this.wheels = wheels;
        }
        return _this;
    }
    // TODO: Implement the tow method from the AbleToTow interface
    Truck.prototype.tow = function (vehicle) {
        // TODO: Get the make an model of the vehicle if it exists
        var vehicleMake = this.make;
        var vehicleModel = this.model;
        // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        // TODO: If it is, log that the vehicle is being towed
        if (this.weight <= this.towingCapacity) {
            console.log("".concat(this.make, " ").concat(this.model, " is being towed."));
        }
        // TODO: If it is not, log that the vehicle is too heavy to be towed
        else {
            console.log("".concat(this.make, " ").concat(this.model, " is too heavy."));
        }
    };
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    Truck.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("VIN: ".concat(this.vin));
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
        console.log("Weight: ".concat(this.weight));
        console.log("Top Speed: ".concat(this.topSpeed));
        console.log("Color: ".concat(this.color));
        console.log("Towing Capacity: ".concat(this.towingCapacity));
        console.log("Whhels: ".concat(this.wheels));
    };
    return Truck;
}(Vehicle_js_1.default));
// Export the Truck class as the default export
exports.default = Truck;
