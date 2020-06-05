import os

print('Paste path to bg/fg subdirectory')
PATH = input()

def main():
    # index a folder of images into a javascript file
    path_dir = PATH.split('/')
    file = open(PATH + ".js","w+")
    file.write('var ' + path_dir[-2] + 'List = [')
    for index in os.listdir(PATH):
        if index != os.listdir(PATH)[-1]:
            file.write("'" + index + "', ")
        else:
            file.write("'" + index + "'];")

if __name__ == "__main__":    
    # start the main program
    main()