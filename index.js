// *************************** JSON *****************************

var PAGE_DATA = {
    inventory: [
        {
            name: 'Bose SoundLink Color Bluetooth speaker II soft black',
            description:
                'Voice prompts talk you through Bluetooth pairing so it’s easier than ever—or even quick-pair with NFC devices,lets you enjoy up to 8 hours of play time',
            price: '129.00',
            quantity: '8',
            img:
                'https://images.crutchfieldonline.com/ImageHandler/trim/620/378/products/2016/36/018/g018SLCR2B-F.jpg',
            seller: 'O Party Room',
            btn:
                '<button type="button" id="purchase" data-inventory-name="Bose SoundLink Color Bluetooth speaker II soft black" data-inventory-price="129.00" onclick="takeAway(this)">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        },
        {
            name: 'DJ Black-24BLB 24 inch UV Black Pro Blacklight',
            description:
                'Package comes with two American DJ Black-24BLB 2 Foot Black Lights that are made of durable and high quality material.',
            price: '39.98',
            quantity: '10',
            img:
                'https://images-na.ssl-images-amazon.com/images/I/41lZed26lXL._SX300_.jpg',
            seller: 'O Party Room',
            btn:
                '<button type="button" id="purchase" data-inventory-name="DJ Black-24BLB 24 inch UV Black Pro Blacklight" data-inventory-price="39.98" onclick="takeAway(this)">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        },
        {
            name: 'Behringer Ultravoice XM8500 Microphone',
            description:
                'This professional-quality microphone is designed to capture your sounds with outstanding sensitivity and accuracy',
            price: '19.99',
            quantity: '28',
            img:
                'https://www.bhphotovideo.com/images/images2500x2500/Behringer_XM8500_XM8500_Dynamic_ULTRAVOICE_215145.jpg',
            seller: 'O Party Room',
            btn:
                '<button type="button" id="purchase" data-inventory-name="Behringer Ultravoice XM8500 Microphone" data-inventory-price="19.99" onclick="takeAway(this)">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        },
        {
            name: "Pro Co S12NQ-25 Speakon-TS Speaker Cable - 25'",
            description:
                'Live Wire Elite cables have the strength and durability to withstand more than everyday use.',
            price: '39.99',
            quantity: '8',
            img:
                'https://images-na.ssl-images-amazon.com/images/I/71zSrGXvvHL._SX554_.jpg',
            seller: 'O Party Room',
            btn:
                '<button type="button" id="purchase" data-inventory-name="Pro Co S12NQ-25 Speakon-TS Speaker Cable - 25" data-inventory-price="39.99" onclick="takeAway(this)">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        },
        {
            name:
                'Chauvet DJ FXarray Q5 RGB+UV LED Wash Array (RGBUV LED Wash Array)',
            description:
                'The Chauvet DJ FXarray Q5 Wash Light is an exciting and versatile quad-color LED wash light. It features an array of RGB+UV LEDs to spread light evenly across the dance floor',
            price: '149.99',
            quantity: '13',
            img:
                'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSI__i05-PCfdXJOTcj5efZkCdqCWp9-rCaFPBSQPQvudN1XzNZBRjmCLxZcZYeFX8Ye4iqOFnH&usqp=CAE',
            seller: 'O Party Room',
            btn:
                '<button type="button" id="purchase" data-inventory-name="Chauvet DJ FXarray Q5 RGB+UV LED Wash Array (RGBUV LED Wash Array)" data-inventory-price="149.99" onclick="takeAway(this)">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        },
        {
            name: 'Gator G-MIX 20X25 - 20" x 25" ATA Mixer Case',
            description:
                'Protect your valuable gear with this rugged Gator mixer case constructed of nearly indestructible lightweight polyethylene.',
            price: '239.99',
            quantity: '5',
            img:
                'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJXvZDF9kE0yUjCebl7AjfK_DIvWc8twK2F3EiQYgYlEr_8MYPom3X3qlU8mL5jbnP5caH92Br&usqp=CAE',
            seller: 'O Party Room',
            btn:
                '<button type="button" id="purchase" data-inventory-name="Gator G-MIX 20X25 - 20" x 25" ATA Mixer Case"data-inventory-price="239.99" onclick="takeAway(this)">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        },
        {
            name: 'Soundcraft EPM8 8 Channel Multi Purpose Mixing Console',
            description:
                'Low-cost high-performance mixers Soundcraft have unveiled another addition to the rapidly growing new Soundcraft family, the multi-format low-cost EPM mixers.',
            price: '248.00',
            quantity: '5',
            img:
                'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxg-sm_d2iuGsyUZTMkf-P2Nd0r1QMqWu5MGlMs0phw1ESrBiYeUmP-plRh-zEAx4qBNp7rgA&usqp=CAE',
            seller: 'O Party Room',
            btn:
                '<button type="button" id="purchase" data-inventory-name="Soundcraft EPM8 8 Channel Multi Purpose Mixing Console" data-inventory-price="248.00" onclick="takeAway(this)">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        },
        {
            name: 'Gator Frameworks GFW-MIC-2100 Deluxe Tripod Mic Stand',
            description:
                'This Frameworks Deluxe Tripod mic stand features heavy-duty steel construction and a convenient soft-grip one-handed height adjustment clutch.',
            price: '39.99',
            quantity: '15',
            img:
                'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJhqWPcuyLI41B9VQoQ4jmvzoB8l5zq34TkZxWOsjjFTUmYHB3fUl5Lazfq-hSd8AtnvIXgDs&usqp=CAE',
            seller: 'O Party Room',
            btn:
                '<button type="button" id="purchase" data-inventory-name="Gator Frameworks GFW-MIC-2100 Deluxe Tripod Mic Stand" data-inventory-price="39.99" onclick="takeAway(this)">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        },
        {
            name:
                'Fog Machine - 500 Watt Mini Fog Machine with Remote and Fog Juice',
            description: 'Impressive 2,000 Cubic ft. per minute',
            price: '89.99',
            quantity: '23',
            img:
                'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3y-HMv2y8JXgKJQHh1mIbTW8l65T-ZCh5Y9Lo2WPc82TWe6OL&usqp=CAE',
            seller: 'O Party Room',
            btn:
                '<button type="button" id="purchase" data-inventory-name="Fog Machine - 500 Watt Mini Fog Machine with Remote and Fog Juice" data-inventory-price="89.00" onclick="takeAway(this)">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        }
    ]
};
var myTotal = 0;
var cart = [];
var total = [];

function getInventory(i) {
    var item = PAGE_DATA.inventory[i];
    var html = '<h4>';
    html +=
        '<div class="col-lg-4 col-md-4 col-sm-4 products">' +
        '<img src="' +
        item.img +
        '">' +
        '<p></p>' +
        '<b>Name: </b>' +
        item.name +
        '<br>' +
        '<b>Description: </b>' +
        item.description +
        '<br>' +
        '<b>Price: $</b>' +
        item.price +
        '<br>' +
        '<b>Quantity: </b>' +
        item.quantity +
        '<p></p>' +
        addCartBtn(item) +
        '<br><br><br>' +
        '<b> Seller: </b>' +
        item.seller +
        '</div>';
    return html;
}

function loadInventory() {
    var html = '';
    for (var c = 0; c < PAGE_DATA.inventory.length; c++) {
        html += getInventory(c);
    }
    // var inventory = PAGE_DATA.inventory;
    // var html = inventory
    //     .map(function(inventory) {
    //         return getInventory(inventory);
    // })
    // .join('');
    $('#selling').html(html);
}

function removeQuantity(i) {
    var stock = PAGE_DATA.inventory[i].quantity;
    stock = Math.max(0, stock - 1);
    PAGE_DATA.items[i].quantity = stock;
}

function takeAway(target) {
    var inventory = PAGE_DATA.inventory;
    for (var c = 0; c < inventory.length; c++) {
        var stock = inventory[c].quantity;
        stock = Math.max(0, stock - 1);
        console.log(stock);
        inventory[i].quantity = stock;
        // removeQuantity(c);
    }
    var name = target.attributes['data-inventory-name'].value;
    var cost = target.attributes['data-inventory-price'].value;
    cart.push('<li>' + name + '</li>');
    total.push(cost);
    for (var i = 0, len = total.length; i < len; i++) {
        console.log(total[i]);
        myTotal += parseFloat(total[i]);
    }
    var items = $('#items').val();
    $('#items').html(cart);
    $('#final').html(
        myTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    );
    loadInventory();
}

function addToCart() {
    var inventory = PAGE_DATA.inventory;
    var html = '<li>';
    for (var i in inventory) {
        if (inventory[i]) {
            $('#purchase').click(function() {
                takeAway(inventory[i].quantity);
            });
        }
    }
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

function addCartBtn(item) {
    answer = [];
    if (item.quantity > 0) {
        // $('#purchase').on('click', function(event) {
        //     takeAway(item);
        // });
        answer.push(
            item.btn
            // '<button type="button" id="purchase" data-item-name="name" onclick="takeAway(this)">' +
            //     '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>'
        );
    } else if (item.quantity <= 0) {
        answer.push(
            '<div class="warning"> <b> Item is out of stock sorry! </b></div>'
        );
    }
    return answer.join('');
}

function constructSell(item) {
    var button =
        '<button type="button" id="purchase" data-inventory-name="' +
        $('#product').val() +
        '" onclick="takeAway(this)">' +
        '<i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart</button>';
    return {
        name: $('#product').val(),
        description: $('#description').val(),
        price: $('#price').val(),
        fullName: $('#fullName').val(),
        quantity: $('#quantity').val(),
        img: $('#img').val(),
        seller: $('#fullName').val(),
        btn: button
    };
}

function main() {
    loadInventory();
    // clicking();
    // takeAway(this);

    $('#sell-form').on('submit', function(event) {
        event.preventDefault();
        var name = $('#fullName');
        PAGE_DATA.inventory.splice(0, 0, constructSell(name));
        $('fullName').val('');
        loadInventory();
    });
}

$(main);
