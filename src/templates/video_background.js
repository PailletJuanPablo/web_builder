import itemsClean from './product.html';
export default (editor, config = {}) => {
  const c = config;
  let bm = editor.BlockManager;
  let cats = c.blockCategories;

  // LAYOUT

  bm.add('single-col').set({
    label: 'Imágenes con texto alternados',
    category: 'Plantillas',
    attributes: { class: 'fa fa-star' },
    content: videoBackground
  });

  bm.add('contact-form').set({
    label: 'Formulario de contacto',
    attributes: { class: 'fa fa-star' },
    category: 'Plantillas',
    content: contactForm
  });

  bm.add('jb-normal').set({
    label: 'Titular',
    attributes: { class: 'fa fa-star' },
    category: 'Plantillas',
    content: jumboNormal
  })

  bm.add('jb-fluid').set({
    label: 'Titual Ancho Completo',
    attributes: { class: 'fa fa-star' },
    category: 'Plantillas',
    content: jumboFluid
  })

  bm.add('jb-fluid').set({
    label: 'Textos con íconos',
    attributes: { class: 'fa fa-star' },
    category: 'Plantillas',
    content: itemsClean
  })


};

const videoBackground = `

<div class="how-section1">
                    <div class="row">
                        <div class="col-md-6 how-img">
                            <img src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Find rewarding projects</h4>
                                        <h4 class="subheading">GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4>
                        <p class="text-muted">Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.
                                            Wide variety and high pay. Clients are now posting jobs in hundreds of skill categories, paying top price for great work.
                                            More and more success. The greater the success you have on projects, the more likely you are to get hired by clients that use GetLance.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>Get hired quickly</h4>
                                        <h4 class="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4>
                                        <p class="text-muted">Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
                                            Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
                                            Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.</p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 how-img">
                             <img src="https://image.ibb.co/ctSLu9/Work_Section2_freelance_img3.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Work efficiently, effectively.</h4>
                                        <h4 class="subheading">With GetLance, you have the freedom and flexibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to:</h4>
                                        <p class="text-muted">Send and receive files. Deliver digital assets in a secure environment.
                                            Share feedback in real time. Use GetLance Messages to communicate via text, chat, or video.
                                            Use our mobile app. Many features can be accessed on your mobile phone when on the go.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>Get paid on time</h4>
                                        <h4 class="subheading">All projects include GetLance Payment Protection — helping ensure that you get paid for all work successfully completed through the freelancing website.</h4>
                                        <p class="text-muted">All invoices and payments happen through GetLance. Count on a simple and streamlined process.
                                            Hourly and fixed-price projects. For hourly work, submit timesheets through GetLance. For fixed-price jobs, set milestones and funds are released via GetLance escrow features.
                                            Multiple payment options. Choose a payment method that works best for you, from direct deposit or PayPal to wire transfer and more.</p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src="https://image.ibb.co/gQ9iE9/Work_Section2_freelance_img4.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
`;


const contactForm = `<div class="container">
<div class="row justify-content-center">
<div class="col-12 col-md-8 col-lg-6 pb-5">


                <!--Form with header-->

                <form action="mail.php" method="post">
                    <div class="card border-primary rounded-0">
                        <div class="card-header p-0">
                            <div class="bg-info text-white text-center py-2">
                                <h3><i class="fa fa-envelope"></i> Contactanos</h3>
                                <p class="m-0">Con gusto te ayudaremos</p>
                            </div>
                        </div>
                        <div class="card-body p-3">

                            <!--Body-->
                            <div class="form-group">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                    </div>
                                    <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre y Apellido" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                    </div>
                                    <input type="email" class="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                    </div>
                                    <textarea class="form-control" placeholder="Envianos tu Mensaje" required></textarea>
                                </div>
                            </div>

                            <div class="text-center">
                                <input type="submit" value="Enviar" class="btn btn-info btn-block rounded-0 py-2">
                            </div>
                        </div>

                    </div>
                </form>
                <!--Form with header-->


            </div>
</div>
</div>`;

const jumboNormal = `
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
`

const jumboFluid = `<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">Fluid jumbotron</h1>
  <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
</div>
</div>`
