export PATH=/Users/canersevince/Library/Android/sdk/platform-tools:/Users/canersevince/Library/Android/sdk/tools:$PATH

jhome () {
  export JAVA_HOME=`/usr/libexec/java_home $@`
  echo "JAVA_HOME:" $JAVA_HOME
  echo "java -version:"
  java -version
}



jhome -v 1.8
