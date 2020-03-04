// Read and write characteristic values from LIFF app
device.gatt
    .connect()
    .then(async () => {
        const service = await device.gatt.getPrimaryService(
            '01234567-0123-0123-0123-012345678901'
        );
        const characteristic = await service.getCharacteristic(
            '01234567-0123-0123-0123-012345678902'
        );
        const value = await characteristic.readValue();

        // suppose we know it is a string, we can decode it
        // here we use TextDecoder for simplicity, you should add a polyfill for compatibility
        const stringValue = new TextDecoder().decode(value);

        // to write string 'liff' into the characteristic
        // here we use TextEncoder for simplicity, you should add a polyfill for compatibility
        await characteristic.writeValue(new TextEncoder().encode('liff'));
    })
    .catch(e => {
        console.log(e.code + ':' + e.message);
    });

// Notify change in characteristic value from LINE Things device
device.gatt.connect().then(async () => {
    const service = await device.gatt.getPrimaryService('01234567-0123-0123-0123-012345678901');
    const characteristic = await service.getCharacteristic('01234567-0123-0123-0123-012345678903');
    characteristic.addEventListener('characteristicvaluechanged', (e) => {
        // suppose we know it is a 16-bit integer value
        console.log('value changed to:' + e.target.value.getInt16();
    });

    await characteristic.startNotifications();
}).catch(e => {
    console.log(e.code + ':' + e.message);
});
// Don't filter devices receiving advertisement packets
liff.bluetooth.requestDevice().then(device => {
    const listener = (e) => {
      device.removeEventListener('advertisementreceived', listener);
    };
    device.addEventListener('advertisementreceived', listener);

    device.watchAdvertisements();
}).catch(e => {
    console.log(e.code + ':' + e.message);
});

// Filter devices receiving advertisement packets
liff.bluetooth.requestDevice({
        filters: [
            {
                deviceId: 't99137fe055dd4980b40f6ac526da7b0b' // ID of desired bluetooth device (BluetoothDevice.id)
            }
        ]
    }).then(device => {
    const listener = (e) => {
      device.removeEventListener('advertisementreceived', listener);
    };
    device.addEventListener('advertisementreceived', listener);

    device.watchAdvertisements();
}).catch(e => {
    console.log(e.code + ':' + e.message);
});
Example request

Node.js
// Register event listener for gattserverdisconnected event
liff.bluetooth
    .requestDevice()
    .then(device => {
        device.addEventListener('gattserverdisconnected', () => {
            console.log('device gatt is disconnected');
        });

        window.gatt.connect();
    })
    .catch(e => {
        console.log(e.code + ':' + e.message);
    });
