comp:
	mkdir src/components/${name};
	touch src/components/${name}/${name}.jsx;
	echo "import ${name} from './${name}.jsx';\n\nexport default ${name};" >> src/components/${name}/index.js

cont:
	mkdir src/containers/${name};
	touch src/containers/${name}/${name}.jsx;
	echo "import ${name} from './${name}.jsx';\n\nexport default ${name};" >> src/container/${name}/index.js
