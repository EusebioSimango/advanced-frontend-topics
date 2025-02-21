import React from 'react';

export default function Section() {
return (
<div className="px-6 py-12">
    {/* Primeira linha com o subtítulo */}
    <div className="text-2xl font-bold mb-8">Tópicos</div>

    {/* Segunda linha com 2 colunas */}
    <div className="flex">
        {/* Coluna da esquerda com a lista (ul) */}
        <div className="w-3/10 pr-8">
            <ul className="list-disc pl-6">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
            </ul>
        </div>

        {/* Coluna da direita com 2 subcolunas */}
        <div className="w-7/10">
            {/* Primeira subcoluna com título e texto */}
            <div className="mb-8">
                <div className="text-xl font-semibold mb-4">Powerful Trading Tools and Features for Experienced Investors</div>
                <div className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus at urna ullamcorper vehicula. Curabitur efficitur neque sit amet malesuada vestibulum. Vestibulum volutpat, nisl sit amet tincidunt tincidunt, arcu sapien varius orci, ut malesuada velit justo at turpis.
                </div>
            </div>

            {/* Segunda subcoluna com a imagem */}
            <div>
                <img src="https://via.placeholder.com/400" alt="Imagem exemplo" className="w-full h-auto" />
            </div>
        </div>
    </div>
</div>
);
}