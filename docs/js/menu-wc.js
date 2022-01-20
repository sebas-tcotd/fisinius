'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">fisinius documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Escribe para buscar"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Comenzando</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Descripción general
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>Léeme
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencias
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Módulos</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d46d08704fe7225b8d8ff141b1f974849da86baba2ccc41301400d679bdb27333b4592c124f4d952359694f5cfa22da77b44465c1ee991096ee9af4502925f91"' : 'data-target="#xs-components-links-module-AppModule-d46d08704fe7225b8d8ff141b1f974849da86baba2ccc41301400d679bdb27333b4592c124f4d952359694f5cfa22da77b44465c1ee991096ee9af4502925f91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d46d08704fe7225b8d8ff141b1f974849da86baba2ccc41301400d679bdb27333b4592c124f4d952359694f5cfa22da77b44465c1ee991096ee9af4502925f91"' :
                                            'id="xs-components-links-module-AppModule-d46d08704fe7225b8d8ff141b1f974849da86baba2ccc41301400d679bdb27333b4592c124f4d952359694f5cfa22da77b44465c1ee991096ee9af4502925f91"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-a83f214d48ebfcd19f0504178d715e46fe64d6124d2428e69c01b016589b002fc88bd78f40ca467bf39fc72243b5248d826dbe9d591d5cae5e6afa851e723761"' : 'data-target="#xs-components-links-module-HomeModule-a83f214d48ebfcd19f0504178d715e46fe64d6124d2428e69c01b016589b002fc88bd78f40ca467bf39fc72243b5248d826dbe9d591d5cae5e6afa851e723761"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-a83f214d48ebfcd19f0504178d715e46fe64d6124d2428e69c01b016589b002fc88bd78f40ca467bf39fc72243b5248d826dbe9d591d5cae5e6afa851e723761"' :
                                            'id="xs-components-links-module-HomeModule-a83f214d48ebfcd19f0504178d715e46fe64d6124d2428e69c01b016589b002fc88bd78f40ca467bf39fc72243b5248d826dbe9d591d5cae5e6afa851e723761"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NewsModule.html" data-type="entity-link" >NewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NewsModule-6f254b2856eb3a57c659e4497ec1fee4eab02c6eeaebdba84b1a28dd1711714cbfd3c9620f68911a21d09c5bdb3e13b98918ef7b90bbb99b3feb6cd830e82d5a"' : 'data-target="#xs-components-links-module-NewsModule-6f254b2856eb3a57c659e4497ec1fee4eab02c6eeaebdba84b1a28dd1711714cbfd3c9620f68911a21d09c5bdb3e13b98918ef7b90bbb99b3feb6cd830e82d5a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewsModule-6f254b2856eb3a57c659e4497ec1fee4eab02c6eeaebdba84b1a28dd1711714cbfd3c9620f68911a21d09c5bdb3e13b98918ef7b90bbb99b3feb6cd830e82d5a"' :
                                            'id="xs-components-links-module-NewsModule-6f254b2856eb3a57c659e4497ec1fee4eab02c6eeaebdba84b1a28dd1711714cbfd3c9620f68911a21d09c5bdb3e13b98918ef7b90bbb99b3feb6cd830e82d5a"' }>
                                            <li class="link">
                                                <a href="components/NewsBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsDataComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewsRoutingModule.html" data-type="entity-link" >NewsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link" >SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchModule-ec9def4a1b21accce203ff5e77a96c268e2b6a979eece6f110329ee00c2bc42b8a2a44cc3fd559f6a92b6424ac0c3f44ab898dfdc9ece9009b606286ae27dfdf"' : 'data-target="#xs-components-links-module-SearchModule-ec9def4a1b21accce203ff5e77a96c268e2b6a979eece6f110329ee00c2bc42b8a2a44cc3fd559f6a92b6424ac0c3f44ab898dfdc9ece9009b606286ae27dfdf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-ec9def4a1b21accce203ff5e77a96c268e2b6a979eece6f110329ee00c2bc42b8a2a44cc3fd559f6a92b6424ac0c3f44ab898dfdc9ece9009b606286ae27dfdf"' :
                                            'id="xs-components-links-module-SearchModule-ec9def4a1b21accce203ff5e77a96c268e2b6a979eece6f110329ee00c2bc42b8a2a44cc3fd559f6a92b6424ac0c3f44ab898dfdc9ece9009b606286ae27dfdf"' }>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchRoutingModule.html" data-type="entity-link" >SearchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SectionsModule.html" data-type="entity-link" >SectionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionsModule-4df181faa074c4d83ed8a4bbd38f27c849bb80024e61c314e3d527c5f296c01850b0fe1febf798b884d96aee97c69ad0adbf278d994541d43bc81875198ff51c"' : 'data-target="#xs-components-links-module-SectionsModule-4df181faa074c4d83ed8a4bbd38f27c849bb80024e61c314e3d527c5f296c01850b0fe1febf798b884d96aee97c69ad0adbf278d994541d43bc81875198ff51c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionsModule-4df181faa074c4d83ed8a4bbd38f27c849bb80024e61c314e3d527c5f296c01850b0fe1febf798b884d96aee97c69ad0adbf278d994541d43bc81875198ff51c"' :
                                            'id="xs-components-links-module-SectionsModule-4df181faa074c4d83ed8a4bbd38f27c849bb80024e61c314e3d527c5f296c01850b0fe1febf798b884d96aee97c69ad0adbf278d994541d43bc81875198ff51c"' }>
                                            <li class="link">
                                                <a href="components/CienciaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CienciaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeporteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeporteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PoliticsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PoliticsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaludComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaludComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SectionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionsRoutingModule.html" data-type="entity-link" >SectionsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-241526a7e60ded41fc8e5ff4d03b2bd5d4a76c94c164ec80b667b3419e0b9856a5c448d0ab0496a35c73472c22afeafe3e1d07412549708f5a4baa3672759cde"' : 'data-target="#xs-components-links-module-SharedModule-241526a7e60ded41fc8e5ff4d03b2bd5d4a76c94c164ec80b667b3419e0b9856a5c448d0ab0496a35c73472c22afeafe3e1d07412549708f5a4baa3672759cde"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-241526a7e60ded41fc8e5ff4d03b2bd5d4a76c94c164ec80b667b3419e0b9856a5c448d0ab0496a35c73472c22afeafe3e1d07412549708f5a4baa3672759cde"' :
                                            'id="xs-components-links-module-SharedModule-241526a7e60ded41fc8e5ff4d03b2bd5d4a76c94c164ec80b667b3419e0b9856a5c448d0ab0496a35c73472c22afeafe3e1d07412549708f5a4baa3672759cde"' }>
                                            <li class="link">
                                                <a href="components/A11yFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >A11yFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/A11yModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >A11yModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeadlineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeadlineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-241526a7e60ded41fc8e5ff4d03b2bd5d4a76c94c164ec80b667b3419e0b9856a5c448d0ab0496a35c73472c22afeafe3e1d07412549708f5a4baa3672759cde"' : 'data-target="#xs-pipes-links-module-SharedModule-241526a7e60ded41fc8e5ff4d03b2bd5d4a76c94c164ec80b667b3419e0b9856a5c448d0ab0496a35c73472c22afeafe3e1d07412549708f5a4baa3672759cde"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Tuberías</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-241526a7e60ded41fc8e5ff4d03b2bd5d4a76c94c164ec80b667b3419e0b9856a5c448d0ab0496a35c73472c22afeafe3e1d07412549708f5a4baa3672759cde"' :
                                            'id="xs-pipes-links-module-SharedModule-241526a7e60ded41fc8e5ff4d03b2bd5d4a76c94c164ec80b667b3419e0b9856a5c448d0ab0496a35c73472c22afeafe3e1d07412549708f5a4baa3672759cde"' }>
                                            <li class="link">
                                                <a href="pipes/ImgNewsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImgNewsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Inyectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/A11yService.html" data-type="entity-link" >A11yService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AzureService.html" data-type="entity-link" >AzureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewsService.html" data-type="entity-link" >NewsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Article.html" data-type="entity-link" >Article</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArticleElement.html" data-type="entity-link" >ArticleElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AzureReaderCredentials.html" data-type="entity-link" >AzureReaderCredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/News.html" data-type="entity-link" >News</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewsElement.html" data-type="entity-link" >NewsElement</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscelánea</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Rutas</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Cobertura de la documentación</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});