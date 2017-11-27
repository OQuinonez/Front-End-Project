// *************************** JSON *****************************

var PAGE_DATA = {
    inventory: [
        {
            name: 'Bose SoundLink Color Bluetooth speaker II soft black',
            description:
                'Voice prompts talk you through Bluetooth pairing so it’s easier than ever—or even quick-pair with NFC devices,lets you enjoy up to 8 hours of play time',
            price: '129.00',
            quantity: 8,
            img:
                'https://images.crutchfieldonline.com/ImageHandler/trim/620/378/products/2016/36/018/g018SLCR2B-F.jpg'
        },
        {
            name: 'DJ Black-24BLB 24 inch UV Black Pro Blacklight',
            description:
                'Package comes with two American DJ Black-24BLB 2 Foot Black Lights that are made of durable and high quality material.',
            price: '39.98',
            quantity: 10,
            img:
                'https://images-na.ssl-images-amazon.com/images/I/41lZed26lXL._SX300_.jpg'
        },
        {
            name: 'Behringer Ultravoice XM8500 Microphone',
            description:
                'This professional-quality microphone is designed to capture your sounds with outstanding sensitivity and accuracy',
            price: '19.99',
            quantity: 28,
            img:
                'https://www.bhphotovideo.com/images/images2500x2500/Behringer_XM8500_XM8500_Dynamic_ULTRAVOICE_215145.jpg'
        },
        {
            name: "Pro Co S12NQ-25 Speakon-TS Speaker Cable - 25'",
            description:
                'Live Wire Elite cables have the strength and durability to withstand more than everyday use.',
            price: '39.99',
            quantity: 8,
            img:
                'https://images-na.ssl-images-amazon.com/images/I/71zSrGXvvHL._SX554_.jpg'
        },
        {
            name:
                'Chauvet DJ FXarray Q5 RGB+UV LED Wash Array (RGBUV LED Wash Array)',
            description:
                'The Chauvet DJ FXarray Q5 Wash Light is an exciting and versatile quad-color LED wash light. It features an array of RGB+UV LEDs to spread light evenly across the dance floor',
            price: '149.99',
            quantity: 13,
            img:
                'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSI__i05-PCfdXJOTcj5efZkCdqCWp9-rCaFPBSQPQvudN1XzNZBRjmCLxZcZYeFX8Ye4iqOFnH&usqp=CAE'
        },
        {
            name: 'Gator G-MIX 20X25 - 20" x 25" ATA Mixer Case',
            description:
                'Protect your valuable gear with this rugged Gator mixer case constructed of nearly indestructible lightweight polyethylene.',
            price: '239.99',
            quantity: 5,
            img:
                'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJXvZDF9kE0yUjCebl7AjfK_DIvWc8twK2F3EiQYgYlEr_8MYPom3X3qlU8mL5jbnP5caH92Br&usqp=CAE'
        },
        {
            name: 'Soundcraft EPM8 8 Channel Multi Purpose Mixing Console',
            description:
                'Low-cost high-performance mixers Soundcraft have unveiled another addition to the rapidly growing new Soundcraft family, the multi-format low-cost EPM mixers.',
            price: '248.00',
            quantity: 5,
            img:
                'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxg-sm_d2iuGsyUZTMkf-P2Nd0r1QMqWu5MGlMs0phw1ESrBiYeUmP-plRh-zEAx4qBNp7rgA&usqp=CAE'
        },
        {
            name: 'Gator Frameworks GFW-MIC-2100 Deluxe Tripod Mic Stand',
            description:
                'This Frameworks Deluxe Tripod mic stand features heavy-duty steel construction and a convenient soft-grip one-handed height adjustment clutch.',
            price: '39.99',
            quantity: 15,
            img:
                'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJhqWPcuyLI41B9VQoQ4jmvzoB8l5zq34TkZxWOsjjFTUmYHB3fUl5Lazfq-hSd8AtnvIXgDs&usqp=CAE'
        },
        {
            name:
                'Fog Machine - 500 Watt Mini Fog Machine with Remote and Fog Juice',
            description: 'Impressive 2,000 Cubic ft. per minute',
            price: '39.99',
            quantity: 23,
            img:
                'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3y-HMv2y8JXgKJQHh1mIbTW8l65T-ZCh5Y9Lo2WPc82TWe6OL&usqp=CAE'
        }
    ]
};

function getInventory(inventory) {
    var html = '<h4>';
    html +=
        '<div class="col-lg-4 col-md-4 col-sm-4 products">' +
        '<img src="' +
        inventory.img +
        '">' +
        '<p></p>' +
        '<b>Name: </b>' +
        inventory.name +
        '<br>' +
        '<b>Description: </b>' +
        inventory.description +
        '<br>' +
        '<b>Price: $</b>' +
        inventory.price +
        '<br>' +
        '<b>Quantity: </b>' +
        inventory.quantity +
        '<p></p>' +
        addCartBtn(inventory) +
        '</div>';
    return html;
}

function loadInventory() {
    var inventory = PAGE_DATA.inventory;
    var html = inventory
        .map(function(inventory) {
            return getInventory(inventory);
        })
        .join('');
    $('#selling').html(html);
}

function takeAway(inventory) {
    if (inventory.quantity > 0) {
        inventory.quantity = inventory.quantity - 1;
    }
    console.log(inventory.quantity);
    return inventory.quantity;
}

function addToCart() {
    var inventory = PAGE_DATA.inventory;
    var html = '<li>';
    for (var i in inventory) {
        if (inventory[i]) {
            // console.log(inventory[i].quantity);
            $('#purchase').click(function() {
                takeAway(inventory[i].quantity);
                console.log(inventory[i].quantity);
            });
        }
    }
}

function clicking() {
    $('#sell-form').on('submit', function(event) {
        event.preventDefault();
        var name = $('#fullName').val();
        var price = $('#price').val();
        var quantity = $('#quantity').val();
        var description = $('#product').val();
        console.log(name, price, quantity, description);
    });
}

function loadCart() {
    var inventory = PAGE_DATA.inventory;
    var html = inventory
        .map(function(inventory) {
            return inventory.name;
        })
        .join('');
    // $('#items').html(html);
}

function attatchHandlers() {
    var inventory = PAGE_DATA.inventory;
    takeAway(inventory);
    loadCart();
    console.log(loadCart());
    console.log('Hello World');
}

function addCartBtn(inventory) {
    answer = [];
    if (inventory.quantity > 0) {
        // $('#purchase').on('click', function(event) {
        //     takeAway(inventory);
        // });
        answer.push(
            '<button type="button" id="purchase" onclick="attatchHandlers()">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        );
    } else if (inventory.quantity <= 0) {
        answer.push(
            '<div class="warning"> <p> Item is out of stock sorry! </p></div>'
        );
    }
    return answer.join('');
}

function constructSell(item) {
    return {
        name: $('#product').val(),
        description: $('#description').val(),
        price: $('#price').val(),
        fullName: $('#fullName').val()
    };
}

function main() {
    loadInventory();
    clicking();
    // attatchHandlers();

    // $('#selling').on('submit', function(event) {
    // event.preventDefault();
    // var name = $('#fullName');
    // console.log(name);
    // PAGE_DATA.inventory.splice(0, 0, constructSell(name));
    // $('fullName').val('');
    // loadInventory();
    // });
}

$(main);
