import React from 'react';
import './styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
function ServiceCOM({ title, documentList, faqList }) {
    return (
        <div>
            <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",
                    route: "",
                    label: "Get Started",
                    color: "success",
                }}
                transparent
                sticky
            />

            <div className="container">

                <header>
                    <h1>{title}</h1>
                    <p className="headline">Your pathway to business success</p>
                </header>
                
                <FormSimple />

                <section className="description-section">
                    <h2>About {title}</h2>
                    <p>Explore the benefits and advantages of incorporating your business with us...</p>
                </section>

                <section className="documents-section">
                    <h2>Required Documents</h2>
                    <div className="document-icons">

                        <div className="icon">

                            <p>Document 1</p>
                        </div>
                    </div>
                </section>

                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq">
                        <div className="question">
                            <h3>Q1: </h3>
                            <p>A1: </p>
                        </div>
                        {/* Repeat for other questions */}
                    </div>
                </section>
            </div>
        </div>

    );
};

export default ServiceCOM;
